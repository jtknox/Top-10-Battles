import * as Constants from '../constants.js'
import store from '../store.js';

const initalState = {
  movies: [],
  queriedMovies: [],
  loading: false,
  error: ''
};

// REDCUER
function movieReducer(state = initalState, action) {
  switch (action.type) {
    case Constants.LOAD_MOVIES_API_PENDING:
      return { ...state, loading: true };
    case Constants.LOAD_MOVIES_API_FULFILLED:
      return { ...state, queriedMovies: action.payload.data.results, loading: false };
    case Constants.LOAD_MOVIES_API_REJECTED:
      return { ...state, loading: false, error: `${action.payload.message}` };
  	case Constants.LOAD_MOVIES_FROM_DB:
  	  state.movies = action.movies;
      return { ...state,  };
    case Constants.ADD_TOP10_MOVIE:
      state.movies.push(action.movieObj);
      return { ...state };
    case Constants.DELETE_TOP10_MOVIE:
      return { ...state };

    default:
      return state;
  }
}

export default movieReducer;