import React, { Component } from 'react';
import SignUpForm from '../components/SignUpForm.js';

class SignUp extends Component {

	render() {
		const { email, password, error } = this.props.properties;
  		const { updateEmailInput, updatePasswordInput, updateAuthError } = this.props.actions;
		return (<SignUpForm 
					email={email} 
					password={password} 
					error={error}
					updateEmail={updateEmailInput}
					updatePassword={updatePasswordInput}
					updateAuthError={updateAuthError}
				/>)
	}
}

export default SignUp;