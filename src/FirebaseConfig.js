import { initializeApp } from "firebase/app";
import {
  getMessaging,
  getToken,
  onMessage,
  isSupported,
} from "firebase/messaging";
import UserApi from "./utils/api";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "domtory-c1ec1.firebaseapp.com",
  projectId: "domtory-c1ec1",
  storageBucket: "domtory-c1ec1.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
// export const messaging = (async () => {
//   try {
//     const isSupportedBrowser = await isSupported();
//     if (isSupportedBrowser) {
//       return getMessaging(app);
//     }
//     console.log("Firebase is not supported in this browser");
//     return null;
//   } catch (err) {
//     console.log('error in messaging');
//     console.log(err);
//     return null;
//   }
// })();

// Initialize Firebase
export const getOrRegisterServiceWorker = () => {
  // console.log(window.navigator.serviceWorker);
  if (
    "serviceWorker" in navigator &&
    typeof window.navigator.serviceWorker !== "undefined"
  ) {
    return window.navigator.serviceWorker
      .getRegistration()
      .then((serviceWorker) => {
        if (serviceWorker) return serviceWorker;
        return window.navigator.serviceWorker.register(
          "/firebase-messaging-sw.js"
        );
      });
  }
  throw new Error("The browser doesn`t support service worker.");
};

// getFirebaseToken function generates the FCM token
export const handleFirebaseToken = async (setIsLoading) => {
  try {
    const isToken = localStorage.getItem("fcm_token");
    // if(isToken){
    //   await UserApi.PostDisableFcmToken(isToken)
    //   .then((response) => {
    //     console.log('existing token deleted');
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    // }

    const messagingResolve = await messaging;
    console.log("message resolved");

    // prevent racing problem and call initializeApp -> getMessaging-> getToken in sequences.
    if (messagingResolve) {
      const registration = await getOrRegisterServiceWorker();
      console.log(registration);
      if (registration.active) {
        const fcm_token = await getToken(messagingResolve, {
          vapidKey: process.env.REACT_APP_VAPID_KEY,
          registration,
        });
        if (fcm_token && fcm_token !== isToken) {
          console.log("updating fcm_token...");
          localStorage.setItem("fcm_token", fcm_token);
          UserApi.postFcmToken({ pushToken: fcm_token })
            .then((response) => {
              alert("알림설정이 갱신되었습니다.");
              setIsLoading(false);
              window.location.reload();
            })
            .catch((error) => {
              alert("알림 설정 중 에러가 발생했습니다. 다시 시도해 주세요.");
              console.error(error);
            });
        }
      } else {
        window.location.reload();
      }
    }
  } catch (error) {
    console.error(error);
  }
};

export async function handleGranted(setIsLoading) {
  console.log("알림 권한이 허용됨");
  await handleFirebaseToken(setIsLoading).catch((error) =>
    console.error(error)
  );
}

// 처음 실행할 때 알림 권한 설정 요청
export const requestPermission = async (setIsPushModal, setIsLoading) => {
  setIsLoading(true);
  if (!("Notification" in window)) {
    setIsPushModal(true);
    setIsLoading(false);
    // Check if the browser supports notifications
    console.log("This browser does not support desktop notification");
  } else if (Notification.permission === "default") {
    console.log("권한 요청 중...");
    const permission = await Notification.requestPermission();
    if (permission === "denied") {
      alert(`알림 권한을 허용해주세요!`);
      return;
    } else {
      handleGranted(setIsLoading);
    }
  }
  // handleGranted(setIsLoading);
};

export const reactiveServiceWorker = async () => {
  const messagingResolve = await messaging;
  console.log("message resolved");
  // prevent racing problem and call initializeApp -> getMessaging-> getToken in sequences.
  if (messagingResolve) {
    const registration = await getOrRegisterServiceWorker();
  }
};
