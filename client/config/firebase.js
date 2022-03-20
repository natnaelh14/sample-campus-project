// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCXYdGDmYXJWKX8Cj9w30RncROpx7OdZmI",
  authDomain: "sample-campus-project.firebaseapp.com",
  projectId: "sample-campus-project",
  storageBucket: "sample-campus-project.appspot.com",
  messagingSenderId: "919542381536",
  appId: "1:919542381536:web:a3b9e78d026b75159dc985"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()