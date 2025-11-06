// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJaieMf-jQxT4Puoi8zrv9SP7ue4D9KdM",
  authDomain: "authentication-67937.firebaseapp.com",
  projectId: "authentication-67937",
  storageBucket: "authentication-67937.firebasestorage.app",
  messagingSenderId: "411559344325",
  appId: "1:411559344325:web:1c03dd5564a25053e0d8ac",
  measurementId: "G-X3L0R06KZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
