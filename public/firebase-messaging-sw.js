self.importScripts("https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js");
self.importScripts(
  "https://www.gstatic.com/firebasejs/8.2.3/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDLGIiOe34ishLXeJfgUVXT6eVwX4hE3M4",
  authDomain: "fir-messaging-5c35f.firebaseapp.com",
  projectId: "fir-messaging-5c35f",
  storageBucket: "fir-messaging-5c35f.appspot.com",
  messagingSenderId: "531917208026",
  appId: "1:531917208026:web:46f2c66b9271d28dd968e3",
});

firebase.messaging();
