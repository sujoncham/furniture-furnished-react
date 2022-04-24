// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB17w3iS-W5usiOLlTw6XFWC5sQrOIBzGE",
  authDomain: "react-firebase-auth-90e70.firebaseapp.com",
  projectId: "react-firebase-auth-90e70",
  storageBucket: "react-firebase-auth-90e70.appspot.com",
  messagingSenderId: "195409483857",
  appId: "1:195409483857:web:c47feb70746a80a70ec070"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;