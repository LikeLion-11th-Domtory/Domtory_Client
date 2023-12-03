// firebase-messaging-sw.js

// importScripts("https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js");
// importScripts("https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js");

const consoleMessage = function (message) {
  console.log("Service Worker: " + message);
};

self.addEventListener("install", function (e) {
  self.skipWaiting();
  consoleMessage("INSTALL");
});

self.addEventListener("activate", function (event) {
  consoleMessage("ACTIVE");
});

self.addEventListener("push", function (e) {
  console.log("push: ", e.data.json());
  if (!e.data.json()) return;

  const resultData = e.data.json().notification;
  const notificationTitle = resultData.title;
  const notificationOptions = {
    body: resultData.body,
    icon: resultData.image,
  };

  e.waitUntil(
    self.registration.showNotification(notificationTitle, notificationOptions)
  );
});

self.addEventListener("notificationclick", function (event) {
  console.log("notification click");
  const url = "/";
  event.notification.close();
  event.waitUntil(clients.openWindow(url));
});

// // Firebase Cloud Messaging
// const handleFirebaseMessaging = async function () {
//   const firebaseApp = await firebase.initializeApp({
//     apiKey: "AIzaSyCsNgGOqflGDtxmUp6Kbcbyoh5hUbX9Jfw",
//     authDomain: "domtory-c1ec1.firebaseapp.com",
//     projectId: "domtory-c1ec1",
//     storageBucket: "domtory-c1ec1.appspot.com",
//     messagingSenderId: "8176614070",
//     appId: "1:8176614070:web:f776227696b8df9c2d4417",
//     measurementId: "G-ELF8DS7FSE"
//   });
//   const messaging = firebaseApp.messaging();

//   messaging.onMessage(messaging, function (payload) {
//     console.log("Message received:", payload);

//     const notificationOptions = {
//       body: payload.notification.body,
//       icon: payload.notification.icon,
//     };

//     self.registration.showNotification(
//       payload.notification.title,
//       notificationOptions
//     );
//   });
// };

// handleFirebaseMessaging();

// messaging.onbackgroundmessage(function (payload) {
//   console.log('firebase received background message ', json.stringify(payload));
  
//   const resultData = e.data.json().notification;
//   const notificationTitle = resultData.title;
//   const notificationOptions = {
//     body: resultData.body,
//     icon: resultData.image,
//   };

//   self.registration.showNotification(
//     payload.notification.title,
//     notificationOptions
//       ,notificationoptions);
// });
