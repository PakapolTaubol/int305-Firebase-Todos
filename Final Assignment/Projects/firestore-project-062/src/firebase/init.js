import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCQgHDKh1kJmbfWmfe3Uve6VZJmB8OPe1U",
    authDomain: "int305-firestore-lab16.firebaseapp.com",
    projectId: "int305-firestore-lab16",
    storageBucket: "int305-firestore-lab16.appspot.com",
    messagingSenderId: "1035211322354",
    appId: "1:1035211322354:web:7488e4f8d5d0403660b16b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; 