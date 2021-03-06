import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignIn from '../routes/SignIn.js';
import * as Actions from '../actions/User.js'

const mapStateToProps = (state) => {
	return {
		properties: state
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