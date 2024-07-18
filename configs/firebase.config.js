// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDShYkKUBx9nRpgHWeonorA3d89cy1Gjdk",
  authDomain: "ai-travel-planner-2fad7.firebaseapp.com",
  projectId: "ai-travel-planner-2fad7",
  storageBucket: "ai-travel-planner-2fad7.appspot.com",
  messagingSenderId: "226488688809",
  appId: "1:226488688809:web:53a924f8cbd0c4632e09b8",
  measurementId: "G-D84C2NZDN9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
