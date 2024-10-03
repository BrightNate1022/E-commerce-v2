// import Storepage from "./store/page";
import Link from 'next/link'
// import ApiGet from "./backend/apiget";
import { Component } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALy-gm3eimDYu5DKSeIeVWUpbiole_rpM",
  authDomain: "silver-e0028.firebaseapp.com",
  databaseURL: "https://silver-e0028-default-rtdb.firebaseio.com",
  projectId: "silver-e0028",
  storageBucket: "silver-e0028.appspot.com",
  messagingSenderId: "539464464516",
  appId: "1:539464464516:web:75e5532dc8ba1fa6102ad1",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function Home() {
  
  return (
    <main>
  
    </main>
  );
}
