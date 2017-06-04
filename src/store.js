import { createStore, combineReducers, applyMiddleware } from 'redux';
import searchReducer from './reducers/Search.js';
import authenticationReducer from './reducers/Authentication.js';
import promise from 'redux-promise-middleware';

export default createStore(combineReducers({ search: searchReducer, authentication: authenticationReducer}), applyMiddleware(promise()));