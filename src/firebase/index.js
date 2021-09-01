import { initializeApp } from 'firebase/app';
import admin from 'firebase-admin';

const firebaseConfig = {

	apiKey: 'AIzaSyCzOdLT2PsT9Md1ZpzLh_Ahgy01CdW0koM',
	authDomain: 'to-do-liste-d3b7e.firebaseapp.com',
	projectId: 'to-do-liste-d3b7e',
	storageBucket: 'to-do-liste-d3b7e.appspot.com',
	messagingSenderId: '625313090424',
	appId: '1:625313090424:web:d2f4c5991b6830607d568d',
	measurementId: 'G-YPY7X120PN',
};

const app = initializeApp(firebaseConfig);

const db = admin.firestore();

export {
	db, app,
};
