import * as Constants from '../constants.js'

export const loadMovies = (url) => {
    return {
        type: Constants.LOAD_MOVIES,
        url
    };
}

export const updateQuery = (value) => {
    return {
        type: Constants.UPDATE_QUERY,
        value
    };
}