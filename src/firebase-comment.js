import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEZoildtJVUoxYzmODaGgN3Mb4lLICnWw",
  authDomain: "kalin-portfolio-web.firebaseapp.com",
  projectId: "kalin-portfolio-web",
  storageBucket: "kalin-portfolio-web.firebasestorage.app",
  messagingSenderId: "142789897398",
  appId: "1:142789897398:web:9a59eabdf1209abd5f0a17"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };