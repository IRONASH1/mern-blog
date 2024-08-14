// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9564d.firebaseapp.com",
  projectId: "mern-blog-9564d",
  storageBucket: "mern-blog-9564d.appspot.com",
  messagingSenderId: "726666072532",
  appId: "1:726666072532:web:a2336547a3392bc7e14641"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);