self.importScripts("https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js");
self.importScripts(
  "https://www.gstatic.com/firebasejs/8.2.3/firebase-messaging.js"
);

firebase.initializeApp({
  messagingSenderId: "564575562330",
});

firebase.messaging();
