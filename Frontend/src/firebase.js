
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBJWXT54qwUdJ9mley3FZarEM0piycRC-o",
  authDomain: "exchango-66e35.firebaseapp.com",
  projectId: "exchango-66e35",
  storageBucket: "exchango-66e35.appspot.com",
  messagingSenderId: "1038014984527",
  appId: "1:1038014984527:web:c7f5d025a4ad366415953a",
  measurementId: "G-C0DM5Z4P8X"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
export{app, auth}