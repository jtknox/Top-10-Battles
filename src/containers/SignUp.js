import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUp from '../routes/SignUp.js';
import * as Actions from '../actions/Authentication.js'

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

const SignUpContainer = connect(
  	mapStateToProps,
  	mapDispatchToProps
)(SignUp)

export default SignUpContainer;