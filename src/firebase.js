import * as firebase from 'firebase';
import { updateUserID, logout } from './actions/Authentication.js';
import store from './store.js';

var config = {
    apiKey: "AIzaSyCMfTi0vHH-O-cbd-ZfucIdBQ7torp9aHU",
    authDomain: "top10battles-fb45b.firebaseapp.com",
    databaseURL: "https://top10battles-fb45b.firebaseio.com",
    projectId: "top10battles-fb45b",
    storageBucket: "top10battles-fb45b.appspot.com",
    messagingSenderId: "637586387738"
};

export const firebaseApp = firebase.initializeApp(config);
export const top10MovieRef = firebase.database().ref('top10Movies');

firebase.auth().onAuthStateChanged((user) => {
	if(user) {
		console.log('signing in');
  		store.dispatch(updateUserID(user.uid));
	}
	else {
		console.log('singing out');
		store.dispatch(logout());
	}
});