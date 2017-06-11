import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './reducers/User.js';
import firebaseReducer from './reducers/Firebase.js';
import movieReducer from './reducers/Movies.js';
import promise from 'redux-promise-middleware';
import * as Constants from './constants.js';

const appReducer = combineReducers({ user: userReducer, firebase: firebaseReducer, movies: movieReducer  });

const rootReducer = (state, action) => {
  if (action.type === Constants.LOGOUT) {
    state = undefined
  }

  return appReducer(state, action)
}

export default createStore(rootReducer, applyMiddleware(promise()));