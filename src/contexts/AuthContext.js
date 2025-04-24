import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../Firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
// Create the AuthContext
const AuthContext = createContext();

// AuthContextProvider component to provide the AuthContext to children components
export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // After the user is created, save user data to Firestore
        setDoc(doc(db, "user", email), { savedShows: [] })
          .then(() => {
            console.log("User data saved to Firestore!");
          })
          .catch((error) => {
            console.error("Error saving user data to Firestore:", error);
          });
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscibe();
    };
  });
  // You can add state, effects, and other logic here if needed
  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}
