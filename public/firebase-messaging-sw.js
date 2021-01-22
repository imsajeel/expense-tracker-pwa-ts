self.importScripts("https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js");
self.importScripts(
  "https://www.gstatic.com/firebasejs/8.2.3/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyBb-Pi26sGnGMrs1cFSfebSn30fvPBIXLA",
  authDomain: "expense-tracker-f97ef.firebaseapp.com",
  projectId: "expense-tracker-f97ef",
  storageBucket: "expense-tracker-f97ef.appspot.com",
  messagingSenderId: "564575562330",
  appId: "1:564575562330:web:ae230500488d744a284663",
});

firebase.messaging();
