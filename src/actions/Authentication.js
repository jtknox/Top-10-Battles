import * as Constants from '../constants.js'

export const updateUserAuthInfo = (email, password) => {
    return {
        type: Constants.AUTHENTICATE,
        email,
        password
    };
}