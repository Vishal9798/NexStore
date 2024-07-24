// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrCjnKUbbFbyKUNABQHfDeG8Mnh-pZ9RY",
  authDomain: "nexstore-e2dff.firebaseapp.com",
  projectId: "nexstore-e2dff",
  storageBucket: "nexstore-e2dff.appspot.com",
  messagingSenderId: "598614576023",
  appId: "1:598614576023:web:5356d01059ee99149c92d2"
};


const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }