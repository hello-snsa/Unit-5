import { ADD_TODO_LOADING, ADD_TODO_SUCCESS, ADD_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, GET_TODO_ERROR } from "./actionTypes.js"


export const addTodoLoading = (data) => {
    return {
        type: ADD_TODO_LOADING,
    };
};


export const addTodoSuccess = (data) => {
    return {
        type: ADD_TODO_SUCCESS,
        payload: data,

    };
};
export const addTodoError = (error) => {
    return {
        type: ADD_TODO_ERROR,
        payload: error,
    }
};



export const getTodoLoading = (data) => {
    return {
        type: GET_TODO_LOADING,
    };
};


export const getTodoSuccess = (data) => {
    return {
        type: GET_TODO_SUCCESS,
        payload: data,

    };
};
export const getTodoError = (error) => {
    return {
        type: GET_TODO_ERROR,
        payload: error,
    }
};


