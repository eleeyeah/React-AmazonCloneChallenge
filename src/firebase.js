import firebase from 'firebase';


const firebaseConfig = {
  apiKey:
    "AIzaSyBHB0jmFUjhMv1_7guNjAzZCaoZwZpI7Uo",
  authDomain:
    "react--clone-4a0db.firebaseapp.com",
  projectId:
    "react--clone-4a0db",
  storageBucket:
    "react--clone-4a0db.appspot.com",
  messagingSenderId:
    "816786998790",
  appId:
    "1:816786998790:web:c8d57d193582613e4b6587"
}; 

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth }


