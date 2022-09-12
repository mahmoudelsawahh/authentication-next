import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup ,onAuthStateChanged, signInWithEmailAndPassword, signOut , updateProfile , updatePhoneNumber} from "firebase/auth"
import { useEffect, useState } from "react";
const firebaseConfig = {
  apiKey: "AIzaSyBGb_XG0tBgBqDQvQGsllzByyu0YdR5LA0",
  authDomain: "social-app-67dfc.firebaseapp.com",
  projectId: "social-app-67dfc",
  storageBucket: "social-app-67dfc.appspot.com",
  messagingSenderId: "294091060265",
  appId: "1:294091060265:web:e6c21439d39177cd5d5838"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const db = getDatabase(app)

// -------------------Add User-----------------------
export const NewUser = (email , password )=>{
  return createUserWithEmailAndPassword(auth  ,email, password )
}

// ------------------------get data user--------------------------------
export const useAuth = ()=>{
  const [currentUser , setCurrentUser] = useState();
  useEffect(()=>{
    const logout = onAuthStateChanged(auth , user => setCurrentUser(user));
    return logout
  },[])
  return currentUser;
}
// -------------------to go out Account && remove Acc --------------------------------------------
export const Logout = ()=>{
  return signOut(auth);
} 
// -------------------to Login  --------------------------------------------
export const LoginUser = (email , password)=>{
return signInWithEmailAndPassword(auth , email , password)
} 
// ---------------------------- Google Auth ---------------------------------------
const provider = new GoogleAuthProvider();
export const SignInWithGoogle = ()=> {
 return signInWithPopup(auth ,provider).then((res)=>{
   console.log(res);
 }).catch((error)=>{
  console.log(error)
 })
}
// -----------------------------------------------------------------------------------
export const fullData = (userName , image , phone)=>{
 return updateProfile(auth.currentUser, {displayName: userName, photoURL: image , phoneNumber : phone })
}
