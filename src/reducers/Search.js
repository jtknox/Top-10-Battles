import * as Constants from '../constants.js'

const initalState = {
  query: '',
  movies: [],
  clicked: false,
  loading: false,
};

// REDCUER
function searchReducer(state = initalState, action) {
  console.log(action);
  switch (action.type) {
    case Constants.LOAD_MOVIES_PENDING:
      console.log('here');
      return { ...state, loading: true };
    case Constants.LOAD_MOVIES_FULFILLED:
      console.log('here');
      return { ...state, movies: action.payload.data.results, clicked: true, loading: false};
    case Constants.LOAD_MOVIES_REJECTED:
      console.log('here');
      return { ...state, loading: false, error: `${action.payload.message}` };

    case Constants.UPDATE_QUERY:
      console.log(state);
      return { ...state, query: action.value};

    default:
      return state;
  }
}

export default searchReducer;