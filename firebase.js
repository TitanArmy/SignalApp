import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDauSM-3o06idPeR-T-QMpm_O3q2zIBQCc",
	authDomain: "signal-d82cb.firebaseapp.com",
	projectId: "signal-d82cb",
	storageBucket: "signal-d82cb.appspot.com",
	messagingSenderId: "638756536694",
	appId: "1:638756536694:web:08c6bb98601bb46e5f3a57"
  };
  

let firebaseApp;

if (firebase.apps.length === 0) {
	firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
	firebaseApp = firebase.app();
}

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
