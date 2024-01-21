// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQBtc__UN8Ra8HT9xU9XHVNi2KXJi6eu0",
  authDomain: "authtesting-2636c.firebaseapp.com",
  projectId: "authtesting-2636c",
  storageBucket: "authtesting-2636c.appspot.com",
  messagingSenderId: "208531891881",
  appId: "1:208531891881:web:e100a01ae160f25343abb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  

const auth = getAuth(app);

export {auth}