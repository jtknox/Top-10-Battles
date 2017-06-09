import * as Constants from '../constants.js'
import { firebaseApp } from '../firebase.js';

const initalState = {
  top10MovieRef: null
};

// REDCUER
function firebaseReducer(state = initalState, action) {
  switch (action.type) {
    case Constants.CREATE_TOP10_MOVIE_REF:
      return { ...state, top10MovieRef: firebaseApp.database().ref(`top10Movies/${action.userID}`) };

    default:
      return state;
  }
}

export default firebaseReducer;