import { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_LOADING } from "./actionTypes.js"

export const loginLoading = () => {

    return {
        type: LOGIN_LOADING,
    }
};

export const loginSuccess = (data) => {

    return {
        type: LOGIN_SUCCESS,
        payload: data,
    }

}

export const loginError = (data) => {

    return {

        Type: LOGIN_ERROR,
        payload: data
    }
}