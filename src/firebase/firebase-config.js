import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBHAP36gtkWDDMKiysuA0oNVscmDfSA8uQ",
    authDomain: "fake-store-app.firebaseapp.com",
    projectId: "fake-store-app",
    storageBucket: "fake-store-app.appspot.com",
    messagingSenderId: "867917265581",
    appId: "1:867917265581:web:a8ff4f6fce4cc208a52424"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db, 
    googleAuthProvider,
    firebase
}
