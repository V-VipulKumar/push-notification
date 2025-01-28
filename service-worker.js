importScripts('https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.2.0/firebase-messaging.js');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfzXNxNS60WZeOKZaIPNIw50JWVVHj5EQ",
  authDomain: "learnpushnotification-2ae9e.firebaseapp.com",
  projectId: "learnpushnotification-2ae9e",
  storageBucket: "learnpushnotification-2ae9e.firebasestorage.app",
  messagingSenderId: "485718680305",
  appId: "1:485718680305:web:40def85e269d8594b47f50",
  measurementId: "G-X5T7CP3GDW"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Background message handler
messaging.onBackgroundMessage((payload) => {
  console.log("Background message received:", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

