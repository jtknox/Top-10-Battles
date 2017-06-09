import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase.js';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      email: '',
      password: '',
      errorMessage: ''
    }
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('enter');
      this.signIn();
    }
  }

  signIn() {
    const { updateUserAuthInfo } = this.props;
    const { email, password } = this.state;
    updateUserAuthInfo(email, password)
    const user = firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ errorMessage: error.message });
      })
  }

  render() {
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
              onChange={event => this.setState({ email: event.target.value })}
              onKeyPress={(e) => this._handleKeyPress(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword1" 
              placeholder="Password" 
              onChange={event => this.setState({ password: event.target.value })}
              onKeyPress={(e) => this._handleKeyPress(e)}
            />
          </div>
          <button
             className="btn btn-primary"
             type="button"
             onClick={() => this.signIn()}
             onKeyPress={(e) => this._handleKeyPress(e)}
           >
            Sign In
           </button>
          <div>{this.state.errorMessage}</div>
          <div><Link to={'/signup'}>Sign up instead</Link></div>
        </form>
      </div>
      </div>
    </div>)
  }
}

export default SignInForm;