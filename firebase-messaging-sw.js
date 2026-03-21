// firebase-messaging-sw.js

// Import Firebase scripts for the service worker
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker
firebase.initializeApp({
    apiKey: "AIzaSyBDPdbSyP8WD70CCPwbMA9sPtOK9XLejbQ",
    authDomain: "test2-672e5.firebaseapp.com",
    databaseURL: "https://test2-672e5-default-rtdb.firebaseio.com",
    projectId: "test2-672e5",
    messagingSenderId: "250226237572",
    appId: "1:250226237572:web:d3f794d00f22a703faa2d1"
});

const messaging = firebase.messaging();

// Listen for background messages
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/your-logo.png' // Optional: Add a path to your portal's logo
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
