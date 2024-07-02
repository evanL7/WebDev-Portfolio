import { initializeApp } from "firebase/app";
import { collection, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAT8n7JRv_Zx_LBWKwBjgm2qhiv0VYNZus",
  authDomain: "react-notes-26fbb.firebaseapp.com",
  projectId: "react-notes-26fbb",
  storageBucket: "react-notes-26fbb.appspot.com",
  messagingSenderId: "396924089167",
  appId: "1:396924089167:web:f8ab9760fb699872458b3a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, 'notes')