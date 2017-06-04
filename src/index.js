import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { firebaseApp } from './firebase.js';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import SignIn from './containers/SignIn.js';
import SignUp from './containers/SignUp.js';
import Search from './containers/Search.js';
import GlobalStore from './store.js';
import './styles/App.css'

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    // console.log('user has signed in or up', user);
    const { email } = user;
    browserHistory.push('/search');
  } else {
    console.log('user has signed out or still needs to sign in.')
    browserHistory.replace('/signin');
  }
})

ReactDOM.render(
  <Provider store={GlobalStore}>
	  <Router path="/" history={browserHistory}>
    	 <Route path="/signin" component={SignIn} />
    	 <Route path="/signup" component={SignUp} />
       <Route path="/search" component={Search} />
    </Router>
  </Provider>, document.getElementById('root')
)