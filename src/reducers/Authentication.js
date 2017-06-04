import * as Constants from '../constants.js'

const initalState = {
  email: '',
  password: '',
  error: ''
};

// REDCUER
function authenticationReducer(state = initalState, action) {
  switch (action.type) {

    case Constants.UPDATE_EMAIL_INPUT:
      return { ...state,  email: action.value };

    case Constants.UPDATE_PASSWORD_INPUT:
      return { ...state, password: action.value };

    case Constants.UPDATE_AUTH_ERROR:
      return { ...state, error: action.error };

    default:
      return state;
  }
}

export default authenticationReducer;