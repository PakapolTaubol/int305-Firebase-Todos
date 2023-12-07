import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAW2xO9ucRe2QNdYWmAAeNoz8UYvrG2FsY",
    authDomain: "basic-firebase-web-403ea.firebaseapp.com",
    projectId: "basic-firebase-web-403ea",
    storageBucket: "basic-firebase-web-403ea.appspot.com",
    messagingSenderId: "719182542100",
    appId: "1:719182542100:web:cbcfc07e81ad3637307e01"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; 