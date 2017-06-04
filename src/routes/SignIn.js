import React, { Component } from 'react';
import SignInForm from '../components/SignInForm.js';

class SignIn extends Component {

  render() {
  	const { email, password, error } = this.props.properties;
  	const { updateEmailInput, updatePasswordInput, updateAuthError } = this.props.actions;
		return (<SignInForm 
					email={email} 
					password={password} 
					error={error} 
					updateEmail={updateEmailInput}
					updatePassword={updatePasswordInput}
					updateAuthError={updateAuthError}
				/>)
  }
}

export default SignIn;