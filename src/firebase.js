import * as firebase from 'firebase';
import { updateUserID, logout } from './actions/Authentication.js';
import { createTop10MovieRef } from './actions/Firebase.js';
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

firebase.auth().onAuthStateChanged((user) => {
	if(user) {
		console.log('signing in');
  		store.dispatch(updateUserID(user.uid));
      store.dispatch(createTop10MovieRef(user.uid));
  		console.log(store.getState().authentication.userID);
	}
	else {
		console.log('singing out');
		store.dispatch(logout());
	}
});