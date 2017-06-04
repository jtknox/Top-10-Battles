import React, { Component } from 'react';
import { Link } from 'react-router';
import SignInForm from '../components/SignInForm.js';

class SignIn extends Component {

  render() {
  	const { email, password, error } = this.props.properties.signIn;
  	const { signInUser, updateSignInEmailInput, updateSignInPasswordInput } = this.props.actions;
  	console.log(this.props);
		return (<SignInForm 
					email={email} 
					password={password} 
					error={error} 
					signIn={signInUser}
					updateEmail={updateSignInEmailInput}
					updatePassword={updateSignInPasswordInput}
				/>)
  }
}

export default SignIn;