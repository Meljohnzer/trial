// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxPmP3eyrwktp1CMJ03twcrqA6cn493uM",
  authDomain: "database-80973.firebaseapp.com",
  projectId: "database-80973",
  storageBucket: "database-80973.appspot.com",
  messagingSenderId: "19318233463",
  appId: "1:19318233463:web:c09c63a2d1071d9896e972"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
