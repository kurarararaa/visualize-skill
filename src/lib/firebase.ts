import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGW0BqhQ0sFwB4WnkJAWiLga1lCGt9imw",
  authDomain: "to-visualize.firebaseapp.com",
  projectId: "to-visualize",
  storageBucket: "to-visualize.appspot.com",
  messagingSenderId: "831052216957",
  appId: "1:831052216957:web:541150a91416db4c69cf14"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
