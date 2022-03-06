import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPydkDPlo2NkvRnf1jNt7mOUHvl8-N0kI",
  authDomain: "coin-app-8164d.firebaseapp.com",
  projectId: "coin-app-8164d",
  storageBucket: "coin-app-8164d.appspot.com",
  messagingSenderId: "529787681348",
  appId: "1:529787681348:web:00e3d795c56eb2501c9a11",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
