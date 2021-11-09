import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import React from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyAgDloXJCT1sobA4HrYM5GrSBQ1tzUJXb8",
    authDomain: "crr-ok.firebaseapp.com",
    projectId: "crr-ok",
    storageBucket: "crr-ok.appspot.com",
    messagingSenderId: "788634447451",
    appId: "1:788634447451:web:4438ff99ef4150b889197e",
    measurementId: "G-0KFYFVN697"
};

const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();

export const AuthContext = React.createContext({
    auth, provider
});