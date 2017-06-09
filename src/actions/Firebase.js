import * as Constants from '../constants.js'

export const createTop10MovieRef = (userID) => {
    return {
        type: Constants.CREATE_TOP10_MOVIE_REF,
        userID
    };
}