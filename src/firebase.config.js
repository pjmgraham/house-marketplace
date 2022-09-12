// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqVwhyY5uf5eq79Bey0Y8TFRVPA9WSF0U",
  authDomain: "house-marketplace-96bab.firebaseapp.com",
  projectId: "house-marketplace-96bab",
  storageBucket: "house-marketplace-96bab.appspot.com",
  messagingSenderId: "223945677861",
  appId: "1:223945677861:web:e6ab2a606ca2517b03b3cc",
  measurementId: "G-J5RTXLLW6Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
