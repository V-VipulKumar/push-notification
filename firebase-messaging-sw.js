// Import the Firebase scripts in the service worker
importScripts('https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.2.0/firebase-messaging.js');

// Your Firebase config (same as in your main app)
const firebaseConfig = {
  apiKey: "AIzaSyAfzXNxNS60WZeOKZaIPNIw50JWVVHj5EQ",
  authDomain: "learnpushnotification-2ae9e.firebaseapp.com",
  projectId: "learnpushnotification-2ae9e",
  storageBucket: "learnpushnotification-2ae9e.firebasestorage.app",
  messagingSenderId: "485718680305",
  appId: "1:485718680305:web:40def85e269d8594b47f50",
  measurementId: "G-X5T7CP3GDW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
