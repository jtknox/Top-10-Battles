import * as Constants from '../constants.js'
import axios from 'axios';

export const loadMovies = (url) => {
    return {
        type: Constants.LOAD_MOVIES,
        payload: axios.get(url)
    };
}

export const updateQuery = (value) => {
    return {
        type: Constants.UPDATE_QUERY,
        value
    };
}