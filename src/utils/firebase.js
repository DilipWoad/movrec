// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1XJ5dTaGwSSSpqCabnEbet8hOJFlbH8Q",
  authDomain: "movrec-gpt-bea2b.firebaseapp.com",
  projectId: "movrec-gpt-bea2b",
  storageBucket: "movrec-gpt-bea2b.firebasestorage.app",
  messagingSenderId: "1072663397941",
  appId: "1:1072663397941:web:510a7c0d19d4bedf32137c",
  measurementId: "G-TCT3GEJWCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);