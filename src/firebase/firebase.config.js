// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv3aCucdePjJKR67zgeFmT6alFYmYschA",
  authDomain: "crop-trading-platform-design.firebaseapp.com",
  projectId: "crop-trading-platform-design",
  storageBucket: "crop-trading-platform-design.firebasestorage.app",
  messagingSenderId: "67065743607",
  appId: "1:67065743607:web:2b479cc0ac2d87b9db6bf2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);