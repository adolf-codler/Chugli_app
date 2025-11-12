// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJRS5arxjWY7YAXqLrOolSs2CwSk7u0MY",
  authDomain: "chugli-84afa.firebaseapp.com",
  projectId: "chugli-84afa",
  storageBucket: "chugli-84afa.firebasestorage.app",
  messagingSenderId: "766469337635",
  appId: "1:766469337635:web:2ba0a4296ed58903c0b796",
  measurementId: "G-CPQ8N8MGCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
