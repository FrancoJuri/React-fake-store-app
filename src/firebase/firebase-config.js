import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCzGYWP_744LEvr4FIVsLzX5Co91euQNz0",
  authDomain: "fake-store-app-3ef27.firebaseapp.com",
  projectId: "fake-store-app-3ef27",
  storageBucket: "fake-store-app-3ef27.appspot.com",
  messagingSenderId: "372425986762",
  appId: "1:372425986762:web:e79d2e66b6a78232979a33"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db, 
    googleAuthProvider,
    firebase
}
