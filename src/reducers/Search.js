import * as Constants from '../constants.js'

const initalState = {
  query: '',
  movies: [],
  loading: false,
};

// REDCUER
function searchReducer(state = initalState, action) {
  switch (action.type) {
    case Constants.LOAD_MOVIES_PENDING:
      return { ...state, loading: true };
    case Constants.LOAD_MOVIES_FULFILLED:
      return { ...state, queriedMovies: action.payload.data.results, loading: false };
    case Constants.LOAD_MOVIES_REJECTED:
      return { ...state, loading: false, error: `${action.payload.message}` };

    default:
      return state;
  }
}

export default searchReducer;