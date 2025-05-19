import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtDapsmB6v4HQMKXhhcHPxJCLDK414X28",
  authDomain: "portfolio-web-10665.firebaseapp.com",
  projectId: "portfolio-web-10665",
  storageBucket: "portfolio-web-10665.firebasestorage.app",
  messagingSenderId: "41792650326",
  appId: "1:41792650326:web:36d1f98be7b81130e0cff7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };