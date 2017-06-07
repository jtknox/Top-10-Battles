import * as Constants from '../constants.js'

export const updateUserAuthInfo = (email, password) => {
    return {
        type: Constants.AUTHENTICATE,
        email,
        password
    };
}

export const updateUserID = (userID) => {
	return {
		type: Constants.UPDATE_USER_ID,
		userID
	};
}

export const logout = () => {
	return {
		type: Constants.LOGOUT
	}
}