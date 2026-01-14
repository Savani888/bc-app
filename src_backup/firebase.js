import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRNaV-UdhMrOST8l74kFRkUTxDZX0WV0s",
  authDomain: "bc-login-project.firebaseapp.com",
  projectId: "bc-login-project",
  storageBucket: "bc-login-project.firebasestorage.app",
  messagingSenderId: "731198201504",
  appId: "1:731198201504:web:70af8531f1640fbd75f3c5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
