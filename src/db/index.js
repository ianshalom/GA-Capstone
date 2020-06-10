import firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase
.initializeApp(
		{
		 	apiKey: "AIzaSyDpdlbkmlYjhvqoSy8t9TPmHzPtTtaRuuc",
		    authDomain: "wizer-a5c6b.firebaseapp.com",
		    databaseURL: "https://wizer-a5c6b.firebaseio.com",
		    projectId: "wizer-a5c6b",
		    storageBucket: "wizer-a5c6b.appspot.com",
		    messagingSenderId: "957893239967",
		    appId: "1:957893239967:web:7cbd8b5e5bd8b288592eaa",
		    measurementId: "G-LKCJ5QDJBX"
		}

	)
	.firestore()

	export default db

	const { Timestamp } = firebase.firestore
	export { Timestamp }