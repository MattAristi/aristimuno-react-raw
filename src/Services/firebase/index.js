
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBA-38KTYh4vNnKayz6QrUbQJrQKkasYpA",
  authDomain: "backend-rawbikes.firebaseapp.com",
  projectId: "backend-rawbikes",
  storageBucket: "backend-rawbikes.appspot.com",
  messagingSenderId: "129787750645",
  appId: "1:129787750645:web:8dc3b242210ed71be0bdbc"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)