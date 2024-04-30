// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-38b13.firebaseapp.com",
  projectId: "mern-blog-38b13",
  storageBucket: "mern-blog-38b13.appspot.com",
  messagingSenderId: "537643297762",
  appId: "1:537643297762:web:528ea3638c86bebd00e7bb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
