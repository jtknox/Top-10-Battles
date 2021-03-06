import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserPage from '../routes/UserPage.js';
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

const UserPageContainer = connect(
  	mapStateToProps,
  	mapDispatchToProps
)(UserPage)

export default UserPageContainer;