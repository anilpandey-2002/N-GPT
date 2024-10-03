// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiWyhR_hKIufVjEcvcpfQIOFNC66E1ryU",
  authDomain: "netflixgpt-ad796.firebaseapp.com",
  projectId: "netflixgpt-ad796",
  storageBucket: "netflixgpt-ad796.appspot.com",
  messagingSenderId: "913274449062",
  appId: "1:913274449062:web:e4cad0d3b8521f14325867",
  measurementId: "G-CMBGB09KCR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
