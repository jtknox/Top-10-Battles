import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from '../routes/Search.js';
import * as Actions from '../actions/Search.js'

const mapStateToProps = (state) => {
	return {
		properties: state.search
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