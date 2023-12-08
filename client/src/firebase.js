// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-137a0.firebaseapp.com",
  projectId: "mern-auth-137a0",
  storageBucket: "mern-auth-137a0.appspot.com",
  messagingSenderId: "338218485448",
  appId: "1:338218485448:web:4bfb9811c0bf962a0a07fd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);