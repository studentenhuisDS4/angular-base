importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');

  // Initialize Firebase
   firebase.initializeApp({
    'messagingSenderId': '953653764218'
  });

const messaging = firebase.messaging();