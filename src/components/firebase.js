 


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcryUteN9QS-q-CRsrTcuDF6xcP4IK7qU",
  authDomain: "login-auth-4fa36.firebaseapp.com",
  projectId: "login-auth-4fa36",
  storageBucket: "login-auth-4fa36.firebasestorage.app",
  messagingSenderId: "289452256269",
  appId: "1:289452256269:web:c7165087071f63dcaab944"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;