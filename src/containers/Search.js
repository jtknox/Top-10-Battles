import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from '../routes/Search.js';
import * as Actions from '../actions/Search.js'

const mapState = (state) => {
	console.log(state);
	return {
		properties: state
	};
}

const mapDispatch = (dispatch) => {
	return {
		actions: bindActionCreators(Actions, dispatch),
	};
}

const SearchContainer = connect(
  	mapState,
  	mapDispatch,
)(Search)

export default SearchContainer;