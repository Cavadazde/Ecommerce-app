import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase konfiqurasiyası
const firebaseConfig = {
  apiKey: "AIzaSyCD0KWn9lf1S5NZQfeumCdncfHHo4lLVMk",
  authDomain: "e-commerce-f6d5f.firebaseapp.com",
  projectId: "e-commerce-f6d5f",
  storageBucket: "e-commerce-f6d5f.appspot.com",
  messagingSenderId: "328072230835",
  appId: "1:328072230835:web:a77544d531fc0af5073dc6",
  measurementId: "G-3499PE7X1Y"
};

// Firebase tətbiqini başladırıq
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // `auth` obyektini export edirik
