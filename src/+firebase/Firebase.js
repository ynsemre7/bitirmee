// Import the functions you need from the SDKs you need
import { initializeApp  } from 'firebase/app';

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdURlIHspcX9_CVZnVUlW6c8UvmmANi1s",
  authDomain: "bitirme-6997a.firebaseapp.com",
  projectId: "bitirme-6997a",
  storageBucket: "bitirme-6997a.appspot.com",
  messagingSenderId: "94891727557",
  appId: "1:94891727557:web:193d0201bbc800f450eeac"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
  
export default db;