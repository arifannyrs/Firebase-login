import firebase from "firebase/app";
import "firebase/auth";
import "firebase/filestore";

const firebaseConfig = {
    apiKey: "AIzaSyDAChDesKEyj5L05ECgbcxoh_e_ZSzbj5Q",
    authDomain: "fir-login-3c41a.firebaseapp.com",
    databaseURL: "https://fir-login-3c41a.firebaseio.com",
    projectId: "fir-login-3c41a",
    storageBucket: "fir-login-3c41a.appspot.com",
    messagingSenderId: "1023146737017",
    appId: "1:1023146737017:web:aa8afdfb889a3cca43c3a8",
    };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;