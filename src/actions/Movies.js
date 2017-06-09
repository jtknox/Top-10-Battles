import * as Constants from '../constants.js'

export const initialAddMoviesFromDB = (movies) => {
    return {
        type: Constants.ADD_MOVIES_FROM_DB,
        movies
    };
}

export const addMovie = (movieObj) => {
    return {
        type: Constants.ADD_MOVIE,
        movieObj
    };
}

export const deleteMovie = (title) => {
    return {
        type: Constants.DELETE_MOVIE,
        title
    };
}