import { createStore, combineReducers, applyMiddleware } from 'redux';
import searchReducer from './reducers/Search.js';
import authenticationReducer from './reducers/Authentication.js';
import firebaseReducer from './reducers/Firebase.js';
import movieReducer from './reducers/Movies.js';
import promise from 'redux-promise-middleware';
import * as Constants from './constants.js';

const appReducer = combineReducers({ search: searchReducer, authentication: authenticationReducer, firebase: firebaseReducer, movie: movieReducer  });

const rootReducer = (state, action) => {
  if (action.type === Constants.LOGOUT) {
    state = undefined
  }

  return appReducer(state, action)
}

export default createStore(rootReducer, applyMiddleware(promise()));