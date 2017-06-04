import * as Constants from '../constants.js'

export const updateEmailInput = (value) => {
    return {
        type: Constants.UPDATE_EMAIL_INPUT,
        value
    };
}

export const updatePasswordInput = (value) => {
    return {
        type: Constants.UPDATE_PASSWORD_INPUT,
        value
    };
}

export const updateAuthError = (error) => {
    return {
        type: Constants.UPDATE_AUTH_ERROR,
        error
    };
}