import { ADD_TODO_LOADING, ADD_TODO_SUCCESS, ADD_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS } from "./actionTypes.js"

// export const  = "GET_TODO_SUCCESS";
// export const  = "ADD_TODO_ERROR";

export const addTodoLoading = (data) => {
    return {
        type: ADD_TODO_LOADING,
    };
};


export const addTodoSuccess = (data) => {
    return {
        type: ADD_TODO_SUCCESS,
        payload: data,
        // {
        // status: false,
        // title: data
        // }
    };
};
export const addTodoError = (error) => {
    return {
        type: ADD_TODO_ERROR,
        payload: error,
    }
};


