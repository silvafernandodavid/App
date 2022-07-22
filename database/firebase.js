// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkih9iuL5VcOm6gq-fQGxXmjXuKyrRaF4",
  authDomain: "horaslaborales-531ac.firebaseapp.com",
  databaseURL: "https://horaslaborales-531ac-default-rtdb.firebaseio.com",
  projectId: "horaslaborales-531ac",
  storageBucket: "horaslaborales-531ac.appspot.com",
  messagingSenderId: "985793048518",
  appId: "1:985793048518:web:2bc22d5fd2e121dc428cc7",
  measurementId: "G-2FS24FB712"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities

async function getDias(db){
  const DiasCol = collection(db, 'Dias');
  const DiasSnapshot = await getDocs(DiasCol);
  const cityList = diasSnapshot.docs.map(doc => doc.data());
  return cityList
}
