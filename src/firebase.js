// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "disney-clone-b7200.firebaseapp.com",
  projectId: "disney-clone-b7200",
  storageBucket: "disney-clone-b7200.appspot.com",
  messagingSenderId: "271566461404",
  appId: "1:271566461404:web:afa7e35a73321e0da05719",
  measurementId: "G-RLNXQ2SNHS",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

// For google login
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
export default db;
