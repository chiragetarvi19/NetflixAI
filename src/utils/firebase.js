// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEYnkxcplPHO7JMmwe9hxPbbCjLfHkRpk",
  authDomain: "netflixgpt-86c62.firebaseapp.com",
  projectId: "netflixgpt-86c62",
  storageBucket: "netflixgpt-86c62.appspot.com",
  messagingSenderId: "994329268561",
  appId: "1:994329268561:web:5c2e236632e93d30668370",
  measurementId: "G-LE8FQ6QMYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();