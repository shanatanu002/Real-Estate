// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-9b922.firebaseapp.com",
  projectId: "real-estate-9b922",
  storageBucket: "real-estate-9b922.firebasestorage.app",
  messagingSenderId: "461515048740",
  appId: "1:461515048740:web:fd3226311a699d5960d5b1",
  measurementId: "G-KJLYMZ0Z4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);