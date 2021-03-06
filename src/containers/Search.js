import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from '../routes/Search.js';
import * as Actions from '../actions/Movies.js'

const mapStateToProps = (state) => {
	return {
		properties: state
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(Actions, dispatch),
	};
}

const SearchContainer = connect(
  	mapStateToProps,
  	mapDispatchToProps,
)(Search)

export default SearchContainer;