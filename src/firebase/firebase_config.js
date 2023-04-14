// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs2Nt1YrkfBk_YYhB2rIomZF04KO8D_b0",
  authDomain: "email-password-auth-dd50b.firebaseapp.com",
  projectId: "email-password-auth-dd50b",
  storageBucket: "email-password-auth-dd50b.appspot.com",
  messagingSenderId: "197465909939",
  appId: "1:197465909939:web:91284d9c445fe9b0ba1ec6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;