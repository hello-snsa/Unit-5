import { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_LOADING } from './actionTypes.js';

const initialState = {
    // login: {
    isLoding: false,
    // isSuccess: false,
    isError: false,
    token: "",
    // }
}



export const authReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case LOGIN_LOADING:
            return {
                ...state,
                isLoading: true,
                // login: {
                // ...state.login,
                // isError: false,
                // }
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                token: payload,
                // login: {
                // ...state.login,
                // isError: false,
            }
        // }

        case LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true
                // login: {
                // ...state.login,
                // }
            }

        default:
            return {
                ...state,
            }
    }
}
