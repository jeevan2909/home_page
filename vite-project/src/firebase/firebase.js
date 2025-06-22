// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvegcpFKTfGRzk49QiEtYsWq9A4IyZ4UM",
  authDomain: "project-overview-f36bb.firebaseapp.com",
  projectId: "project-overview-f36bb",
  storageBucket: "project-overview-f36bb.firebasestorage.app",
  messagingSenderId: "947392351670",
  appId: "1:947392351670:web:999bd360535310ae128517",
  measurementId: "G-5DLGZY89DJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);