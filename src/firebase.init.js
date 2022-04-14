// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApBPE5AVEByYvsKYAW9VljZH_8MCdaWNs",
    authDomain: "ema-john-simple-cls59.firebaseapp.com",
    projectId: "ema-john-simple-cls59",
    storageBucket: "ema-john-simple-cls59.appspot.com",
    messagingSenderId: "1082695577407",
    appId: "1:1082695577407:web:b71075e75e5e9ff2da2d8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth; 