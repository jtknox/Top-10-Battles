import React, { Component } from 'react';
import SignUpForm from '../components/SignUpForm.js';

class SignUp extends Component {

	render() {
  		const { updateUserAuthInfo } = this.props.actions;
		return (<SignUpForm 
					updateUserAuthInfo={updateUserAuthInfo}
				/>)
	}
}

export default SignUp;