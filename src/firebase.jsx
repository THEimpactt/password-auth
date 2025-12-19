import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDK_63kY-bPOSWs5aNG_an5Nqwf-Hp1jxg",
  authDomain: "pass-auth-4bc9d.firebaseapp.com",
  projectId: "pass-auth-4bc9d",
  storageBucket: "pass-auth-4bc9d.firebasestorage.app",
  messagingSenderId: "986054717008",
  appId: "1:986054717008:web:ea7ae668338b5160c2ab55"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export {auth}