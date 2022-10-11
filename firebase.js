// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from '@firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXjpcpcaa5MFkOpAZKMMTXuVoLqZAMW8k",
  authDomain: "insta-2-3bbdd.firebaseapp.com",
  projectId: "insta-2-3bbdd",
  storageBucket: "insta-2-3bbdd.appspot.com",
  messagingSenderId: "944163767750",
  appId: "1:944163767750:web:0e3598451c8c699f0d5ec7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};