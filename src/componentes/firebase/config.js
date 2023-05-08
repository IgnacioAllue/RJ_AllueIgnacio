
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyChtugpFCCgBPq7VdEjrzTsWW07wLhDbJ0",
  authDomain: "proyecto-final-1ce3e.firebaseapp.com",
  projectId: "proyecto-final-1ce3e",
  storageBucket: "proyecto-final-1ce3e.appspot.com",
  messagingSenderId: "50296577858",
  appId: "1:50296577858:web:d6347ebaa5c7b92a0ef2db",
  measurementId: "G-ZS42CNNQ8L"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
