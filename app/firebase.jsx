// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1PwKaiYLNKw_dH-Lk0dvn1U_wizonTng",
    authDomain: "react-notes-3fc20.firebaseapp.com",
    projectId: "react-notes-3fc20",
    storageBucket: "react-notes-3fc20.appspot.com",
    messagingSenderId: "146156500236",
    appId: "1:146156500236:web:1f3828f3fef0d7066cc529"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")