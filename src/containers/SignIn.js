import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignIn from '../routes/SignIn.js';
import * as Actions from '../actions/Authentication.js'

const mapStateToProps = (state) => {
	return {
		properties: state.authentication
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(Actions, dispatch)
	}
}

const SignInContainer = connect(
  	mapStateToProps,
  	mapDispatchToProps
)(SignIn)

export default SignInContainer;