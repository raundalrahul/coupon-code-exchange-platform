// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAxm4m0DoN1dBfMWLjUiLO4AWUpj1mkgU0",
  authDomain: "uploadcoupons.firebaseapp.com",
  projectId: "uploadcoupons",
  storageBucket: "uploadcoupons.appspot.com",
  messagingSenderId: "619685808910",
  appId: "1:619685808910:web:abfa89b3ee8d75fbffa55f"
};

const app = initializeApp(firebaseConfig);
export const storage =getStorage(app)