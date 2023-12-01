// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmgDL7eahRJRESgdF9jx_lrFXIu9lCPq8",
  authDomain: "int305fb062.firebaseapp.com",
  projectId: "int305fb062",
  storageBucket: "int305fb062.appspot.com",
  messagingSenderId: "540530064660",
  appId: "1:540530064660:web:3f06120374ccca3f6fd601"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore()

export default db

