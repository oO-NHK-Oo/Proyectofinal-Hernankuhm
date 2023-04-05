
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA7NoiZBrEKBmIETpoaeJ166d-GfKeqmps",
  authDomain: "ecommercenhk.firebaseapp.com",
  projectId: "ecommercenhk",
  storageBucket: "ecommercenhk.appspot.com",
  messagingSenderId: "1074351350101",
  appId: "1:1074351350101:web:344b844361b0c46b5acfdc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
