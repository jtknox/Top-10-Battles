import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignIn from '../routes/SignIn.js';
import * as Actions from '../actions/SignIn.js'

const mapStateToProps = (state) => {
	console.log(state);
	return {
		properties: state
	};
}

const mapDispatchToProps = (dispatch) => {
	console.log(Actions);
	console.log(bindActionCreators(Actions, dispatch))
	return {
		actions: bindActionCreators(Actions, dispatch)
	}
}

const SignInContainer = connect(
  	mapStateToProps,
  	mapDispatchToProps
)(SignIn)

export default SignInContainer;