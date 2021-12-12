importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDcPCp-fdrwaUmnYvTpe2f6rdFKVjhPtuY",
  authDomain: "angular-push-msg.firebaseapp.com",
  projectId: "angular-push-msg",
  storageBucket: "angular-push-msg.appspot.com",
  messagingSenderId: "542380591181",
  appId: "1:542380591181:web:8d4e844b8131341f977404"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Message From Me';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});