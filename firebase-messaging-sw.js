// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the messagingSenderId
firebase.initializeApp({
  apiKey: "AIzaSyBDPdbSyP8WD70CCPwbMA9sPtOK9XLejbQ",
  projectId: "test2-672e5",
  messagingSenderId: "250226237572",
  appId: "1:250226237572:web:d3f794d00f22a703faa2d1"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png', // Replace with your app's actual icon path
    badge: '/badge.png' // Optional: small icon for Android status bar
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
