import * as Constants from '../constants.js'
import { firebaseApp } from '../firebase.js';

const initalState = {
  email: '',
  password: '',
  error: ''
};

// REDCUER
function signInReducer(state = initalState, action) {
  switch (action.type) {
    case Constants.SIGN_IN_USER:
      let errorMessage = '';
      console.log('signing in');
      firebaseApp.auth().signInWithEmailAndPassword(action.email, action.password)
      .catch(error => {
        errorMessage = error
      })
      return { ...state, email: action.email, password: action.password, error: errorMessage };

    case Constants.UPDATE_EMAIL_INPUT:
      return { ...state,  email: action.value};

    case Constants.UPDATE_PASSWORD_INPUT:
      return { ...state, password: action.value};

    default:
      return state;
  }
}

export default signInReducer;