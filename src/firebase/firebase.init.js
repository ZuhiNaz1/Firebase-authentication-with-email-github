// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN-DH_X7HAMQh8tGdVG9yeJT0wNXFj9AI",
  authDomain: "simple-firebase-authenti-be186.firebaseapp.com",
  projectId: "simple-firebase-authenti-be186",
  storageBucket: "simple-firebase-authenti-be186.appspot.com",
  messagingSenderId: "1083151343960",
  appId: "1:1083151343960:web:9c30a700d25d113cbe852d",
  measurementId: "G-GNWFJZBWZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;