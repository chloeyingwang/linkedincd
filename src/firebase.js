import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC6YKv2k5HUQQG_ad1Odxndu4_7uFhe1cY",
  authDomain: "linkedinc-c2b2a.firebaseapp.com",
  projectId: "linkedinc-c2b2a",
  storageBucket: "linkedinc-c2b2a.appspot.com",
  messagingSenderId: "999209783889",
  appId: "1:999209783889:web:609e2789736dd1a3a3de70",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
