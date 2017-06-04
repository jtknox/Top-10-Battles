import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase.js';

class SignUpForm extends Component {

  signUp() {
    const { email, password, updateAuthError } = this.props;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        updateAuthError(error.message);
      })
  }

  render() {
    const { updateEmail, updatePassword, error } = this.props;
    return(
    <div className="container">
      <h1 className="text-center">Register Here!</h1>
      <div className="row row-centered">
      <div className="well col-lg-6 col-centered">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="exampleInputEmail1" 
              placeholder="Email"
              onChange={event => updateEmail(event.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword1" 
              placeholder="Password"
              onChange={event => updatePassword(event.target.value)}
            />
          </div>
          <button
             className="btn btn-primary"
             type="button"
             onClick={() => this.signUp()}
           >
            Sign In
           </button>
          <div>{error}</div>
          <div><Link to={'/signin'}>Already a user? Sign in here!</Link></div>
        </form>
      </div>
      </div>
    </div>)
  }
}

export default SignUpForm;