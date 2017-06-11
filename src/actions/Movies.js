import * as Constants from '../constants.js'
import axios from 'axios'

export const loadMoviesFromAPI = (url) => {
    return {
        type: Constants.LOAD_MOVIES_API,
        payload: axios.get(url)
    };
}

export const loadMoviesFromDB = () => {
    return {
        type: Constants.LOAD_MOVIES_FROM_DB,
    };
}

export const addTop10Movie = (movieObj) => {
    return {
        type: Constants.ADD_TOP10_MOVIE,
        movieObj
    };
}

export const deleteTop10Movie = (title) => {
    return {
        type: Constants.DELETE_TOP10_MOVIE,
        title
    };
}