// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALBLhk6GeSFcwKPCfOkdfu_xkIkSRWKwc",
  authDomain: "mern-book-inventory-438c5.firebaseapp.com",
  projectId: "mern-book-inventory-438c5",
  storageBucket: "mern-book-inventory-438c5.appspot.com",
  messagingSenderId: "211722728661",
  appId: "1:211722728661:web:5d14c3cf0ca88dbdaa9e5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;