import * as Constants from '../constants.js'

export const signInUser = (email, password) => {
    return {
        type: Constants.SIGN_IN_USER,
        email,
        password
    };
}

export const updateSignInEmailInput = (value) => {
    return {
        type: Constants.UPDATE_EMAIL_INPUT,
        value
    };
}

export const updateSignInPasswordInput = (value) => {
    return {
        type: Constants.UPDATE_PASSWORD_INPUT,
        value
    };
}
