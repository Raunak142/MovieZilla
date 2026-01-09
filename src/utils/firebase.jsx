// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN35njqJkzYA2kkxkvblBY8fbTH4bMbyg",
  authDomain: "netflixgpt-24db7.firebaseapp.com",
  projectId: "netflixgpt-24db7",
  storageBucket: "netflixgpt-24db7.firebasestorage.app",
  messagingSenderId: "675326712378",
  appId: "1:675326712378:web:012be72518656faec73303",
  measurementId: "G-SLG2JYVM3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();