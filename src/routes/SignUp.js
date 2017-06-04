import React, { Component } from 'react';
import { Link } from 'react-router';
import SignUpForm from '../components/SignUpForm.js';

class SignUp extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { email, password, error} = this.props;
		return (<SignUpForm email={email} password={password} error={error} />)
	}
}

export default SignUp;