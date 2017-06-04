import React, { Component } from 'react';
import SignInForm from '../components/SignInForm.js';

class SignIn extends Component {

  render() {
  	const { updateUserAuthInfo } = this.props.actions;
		return (<SignInForm
					updateUserAuthInfo={updateUserAuthInfo}
				/>)
  }
}

export default SignIn;