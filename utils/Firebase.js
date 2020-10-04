import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

const config = {
    apiKey: "AIzaSyBsdohBDrAg4CayqtwPzHKWC-lUV4uwYsY",
    authDomain: "mood-app-176b5.firebaseapp.com",
    databaseURL: "https://mood-app-176b5.firebaseio.com",
    projectId: "mood-app-176b5",
    storageBucket: "mood-app-176b5.appspot.com",
    messagingSenderId: "192180057280",
    appId: "1:192180057280:web:40b10f995fc5eae10c6925",
    measurementId: "G-56JN9J7PL7"
};
firebase.initializeApp(config);
export default firebase;