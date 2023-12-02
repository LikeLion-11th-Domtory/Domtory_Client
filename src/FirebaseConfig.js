
import { initializeApp } from "firebase/app";
import {getMessaging, getToken, onMessage, isSupported} from "firebase/messaging";
import UserApi from "./utils/api";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "domtory-c1ec1.firebaseapp.com",
  projectId: "domtory-c1ec1",
  storageBucket: "domtory-c1ec1.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);
export const messaging = (async () => {
  try {
    const isSupportedBrowser = await isSupported();
    if (isSupportedBrowser) {
      return getMessaging(app);
    }
    console.log("Firebase is not supported in this browser");
    return null;
  } catch (err) {
    console.log('error in messaging');
    console.log(err);
    return null;
  }
})();

// Initialize Firebase
export const getOrRegisterServiceWorker = () => {
  if (
    'serviceWorker' in navigator &&
    typeof window.navigator.serviceWorker !== 'undefined'
  ) {
    return window.navigator.serviceWorker
      .getRegistration()
      .then(serviceWorker => {
        if (serviceWorker) return serviceWorker;
        return window.navigator.serviceWorker.register(
          '/firebase-messaging-sw.js',
        );
      });
  }
  throw new Error('The browser doesn`t support service worker.');
};


// getFirebaseToken function generates the FCM token
export const handleFirebaseToken = async () => {
  try {
    const messagingResolve = await messaging;
    console.log(messagingResolve);
    // prevent racing problem and call initializeApp -> getMessaging-> getToken in sequences.
    if (messagingResolve) {
      const registration = await getOrRegisterServiceWorker();
      console.log(registration);
      if (registration.active) {
        const fcm_token = await getToken(messagingResolve, {
          vapidKey: process.env.REACT_APP_VAPID_KEY,
          serviceWorkerRegistration: registration,
        });
        if (fcm_token) {
          console.log(fcm_token);
          UserApi.postFcmToken({ pushToken: fcm_token })
            .then((response) => {
              console.log(response);
              alert('알림이 설정되었습니다.');
              window.location.reload();
            })
            .catch((error) => {
              alert('알림 설정 중 에러가 발생했습니다. 다시 시도해 주세요.');
              console.error(error);
            });
          localStorage.setItem('fcm_token', fcm_token);
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
};


const handleGranted = () => {
  console.log('알림 권한이 허용됨');
  handleFirebaseToken().catch((error) => console.error(error));

  onMessage(messaging, payload => {
    console.log('메시지가 도착했습니다.', payload);
  });
};

export const requestPermission = async (setIsPushModal) => {
  if (!('Notification' in window)) {
    setIsPushModal(true);
    // Check if the browser supports notifications
    console.log('This browser does not support desktop notification');
  } else if (Notification.permission === 'default') {
    console.log('권한 요청 중...');
    const permission = await Notification.requestPermission();
    if (permission === 'denied') {
      alert(`알림 권한을 허용해주세요!`);
      return;
    } else {
      handleGranted();
    }
  }
};