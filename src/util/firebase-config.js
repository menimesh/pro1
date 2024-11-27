
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCegz9uJew7_Btlb2ozs80xURSQrKsNekI",
  authDomain: "shop-752df.firebaseapp.com",
  projectId: "shop-752df",
  storageBucket: "shop-752df.firebasestorage.app",
  messagingSenderId: "566405255801",
  appId: "1:566405255801:web:b286b1d914b83fd64afaa8",
  measurementId: "G-7SC40C2XT8"
};


const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig