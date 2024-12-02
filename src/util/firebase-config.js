// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCYheHO-tQ0JZt4rUqKwd_XEypjhqFDEQA",
  authDomain: "shop1-35dd8.firebaseapp.com",
  projectId: "shop1-35dd8",
  storageBucket: "shop1-35dd8.firebasestorage.app",
  messagingSenderId: "502345176366",
  appId: "1:502345176366:web:1c5c21385a94b74ad796bf",
  measurementId: "G-LHCEXJKBKJ"
};


const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig