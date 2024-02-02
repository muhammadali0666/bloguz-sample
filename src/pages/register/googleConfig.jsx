import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC4njIe4q16FzmEwecCquyDAEnd2DPzeV0",
  authDomain: "blog-b2d10.firebaseapp.com",
  projectId: "blog-b2d10",
  storageBucket: "blog-b2d10.appspot.com",
  messagingSenderId: "951513129700",
  appId: "1:951513129700:web:2d3a7b8b1ffff1a917c2f1",
  measurementId: "G-JGS6BYH2DT"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth, provider}