import React, { Component } from 'react';
import { firebaseApp } from '../firebase.js';
import { Link } from 'react-router';

class SignUpForm extends Component {
  constructor(props){
    super(props);
  }

  signUp() {
    const { email, password, signUp } = this.props;
    //TODO: Actions: CREATE_USER
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error})
      })
  }

  render() {
    const { error } = this.props;
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
              //TODOL UPDATE_EMAIL_INPUT
              onChange={event => this.setState({email: event.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword1" 
              placeholder="Password" 
              //TODO: UPDATE_PASSWORD_INPUT
              onChange={event => this.setState({password: event.target.value})}
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
          <div><Link to={'/signin'}>Already a user? Sign in here!</Link></div>
        </form>
      </div>
      </div>
    </div>)
  }
}

export default SignUpForm;