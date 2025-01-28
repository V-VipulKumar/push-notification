import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-messaging.js";
import { firebaseConfig } from './firebase-config.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Enable Notifications Button
document.getElementById('enable-notifications').addEventListener('click', () => {
  // Request Notification Permission
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      console.log("Notification permission granted.");

      // Get FCM token
      getToken(messaging, { vapidKey: "YOUR_VAPID_KEY" }).then((currentToken) => {
        if (currentToken) {
          console.log("FCM Token:", currentToken);
        } else {
          console.log("No registration token available.");
        }
      }).catch((err) => {
        console.log("Error getting FCM token:", err);
      });
    } else {
      console.log("Notification permission denied.");
    }
  });
});

// Receive Foreground Messages
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // Handle the message (show notifications, etc.)
});

