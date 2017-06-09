import * as Constants from '../constants.js'

const initalState = {
  movies: []
};

// REDCUER
function movieReducer(state = initalState, action) {
  switch (action.type) {
  	case Constants.ADD_MOVIES_FROM_DB:
  	  state.movies = action.movies;
      return { ...state,  };
    case Constants.ADD_MOVIE:
      state.movies.push(action.movie);
      return { ...state };
    case Constants.DELETE_MOVIE:
      return { ...state };

    default:
      return state;
  }
}

export default movieReducer;