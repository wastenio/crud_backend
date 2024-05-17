// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7NrpZb3hkkO_Ll3ck28xD0wx3JgBZBFs",
  authDomain: "crud-9d7eb.firebaseapp.com",
  projectId: "crud-9d7eb",
  storageBucket: "crud-9d7eb.appspot.com",
  messagingSenderId: "382889413056",
  appId: "1:382889413056:web:6715771b0c71aea468e025",
  measurementId: "G-8KMPZ4R9MX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);