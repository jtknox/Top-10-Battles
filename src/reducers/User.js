import * as Constants from '../constants.js'
import { firebaseApp } from '../firebase.js';

const initalState = {
  email: '',
  password: '',
  userID: ''
};

// REDCUER
function authenticationReducer(state = initalState, action) {
  switch (action.type) {

    case Constants.AUTHENTICATE:
      return { ...state,  email: action.email, password: action.password };

     case Constants.UPDATE_USER_ID:
     	return { ...state, userID: action.userID };

    default:
      return state;
  }
}

export default authenticationReducer;