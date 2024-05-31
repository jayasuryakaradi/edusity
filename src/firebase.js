// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRaMKlWMPrJVmzwrdf3mIig1WIPOaJMEM",
  authDomain: "edusity-8d5bd.firebaseapp.com",
  projectId: "edusity-8d5bd",
  storageBucket: "edusity-8d5bd.appspot.com",
  messagingSenderId: "1029264980985",
  appId: "1:1029264980985:web:cbb8c51925c48bdd081b28",
  measurementId: "G-2NR1MNSFPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);