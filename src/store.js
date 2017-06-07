import { createStore, combineReducers, applyMiddleware } from 'redux';
import searchReducer from './reducers/Search.js';
import authenticationReducer from './reducers/Authentication.js';
import promise from 'redux-promise-middleware';
import * as Constants from './constants.js';

const appReducer = combineReducers({ search: searchReducer, authentication: authenticationReducer});

const rootReducer = (state, action) => {
  if (action.type === Constants.LOGOUT) {
    state = undefined
  }

  return appReducer(state, action)
}

export default createStore(rootReducer, applyMiddleware(promise()));