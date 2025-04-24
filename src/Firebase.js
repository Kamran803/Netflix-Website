// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByYr5MhIn77u8PO1gURG7i_xVfK5_aCiY",
  authDomain: "netflix-react-yt-3d8e7.firebaseapp.com",
  projectId: "netflix-react-yt-3d8e7",
  storageBucket: "netflix-react-yt-3d8e7.appspot.com",
  messagingSenderId: "559222944132",
  appId: "1:559222944132:web:58851ad0b898f10051edd1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
