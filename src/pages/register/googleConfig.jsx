import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfa38uGKb4r4J5n0tQD8IQzvZYM1l2J1E",
  authDomain: "blog-site-466e9.firebaseapp.com",
  projectId: "blog-site-466e9",
  storageBucket: "blog-site-466e9.appspot.com",
  messagingSenderId: "239138086806",
  appId: "1:239138086806:web:a89c5276c226adb22607b7",
  measurementId: "G-QZQPRWLDHJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
