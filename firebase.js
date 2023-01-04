// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPRiumVCsYtuODideDHcyEsjmqfQFl9SQ",
  authDomain: "crunchyrollnext-683ad.firebaseapp.com",
  projectId: "crunchyrollnext-683ad",
  storageBucket: "crunchyrollnext-683ad.appspot.com",
  messagingSenderId: "534719192781",
  appId: "1:534719192781:web:1032199db112276fd61384",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
