import * as Constants from '../constants.js'

export const createUser = (email, password) => {
    return {
        type: Constants.CREATE_USER,
        email,
        password
    };
}

export const updateSignUpEmailInput = (value) => {
    return {
        type: Constants.UPDATE_EMAIL_INPUT,
        value
    };
}

export const updateSignUpPasswordInput = (value) => {
    return {
        type: Constants.UPDATE_PASSWORD_INPUT,
        value
    };
}
