// firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js");

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

// Firebase Cloud Messaging
const handleFirebaseMessaging = async function () {
  const messaging = getMessaging();

  onMessage(messaging, function (payload) {
    console.log("Message received:", payload);

    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.icon,
    };

    self.registration.showNotification(
      payload.notification.title,
      notificationOptions
    );
  });
};

handleFirebaseMessaging();
