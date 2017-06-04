import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase.js';

class SignInForm extends Component {

  signIn() {
    const { email, password, updateAuthError } = this.props;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        updateAuthError(error.message);
      })
  }

  render() {
    const { updateEmail, updatePassword, error } = this.props;
    return(
    <div className="container">
      <h1 className="text-center">Welcome To Top 10 Wars!</h1>
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
              onChange={event => updateEmail(event.target.value)}
            />
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
             onClick={() => this.signIn()}
           >
            Sign In
           </button>
          <div>{error}</div>
          <div><Link to={'/signup'}>Sign up instead</Link></div>
        </form>
      </div>
      </div>
    </div>)
  }
}

export default SignInForm;