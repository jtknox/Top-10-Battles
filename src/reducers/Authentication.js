import * as Constants from '../constants.js'
import { firebaseApp } from '../firebase.js';

const initalState = {
  email: '',
  password: ''
};

// REDCUER
function authenticationReducer(state = initalState, action) {
  switch (action.type) {

    case Constants.AUTHENTICATE:
      return { ...state,  email: action.email, password: action.password };

    default:
      return state;
  }
}

export default authenticationReducer;