import { createStore, combineReducers } from 'redux';
import searchReducer from './reducers/Search.js'
import signInReducer from './reducers/SignIn.js'
import signUpReducer from './reducers/SignUp.js'

export default createStore(combineReducers({ search: searchReducer, signIn: signInReducer, signUp: signUpReducer}));