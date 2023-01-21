
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAi1LWqICtdfYWbpDWACsucNI3K0nEoSX8",
  authDomain: "netflix-clone-7c335.firebaseapp.com",
  projectId: "netflix-clone-7c335",
  storageBucket: "netflix-clone-7c335.appspot.com",
  messagingSenderId: "627277106528",
  appId: "1:627277106528:web:63b8a2ebb5461144596205",
  measurementId: "G-04BGTP2RV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);