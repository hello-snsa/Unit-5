import axios from "axios";
import { ADD_TODO_LOADING, ADD_TODO_SUCCESS, ADD_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, GET_TODO_ERROR } from "./actionTypes.js"


export const addTodoLoading = () => {
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



export const getTodoLoading = () => {
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

export const getTodo = () => async (dispatch) => {

    dispatch(getTodoLoading());
    try {
        const ret = await axios.get("http://localhost:3001/todos")
        dispatch(getTodoSuccess(ret.data));
    } catch (error) {
        dispatch(getTodoError(error.message));
    }
}

export const addTodo = (text) => async (dispatch) => {
    try {
        const resp = await axios.post("http://localhost:3001/todos", {
            status: false,
            title: text
        })
        dispatch(addTodoSuccess(resp.data));
        getTodo();


    } catch (e) {
        dispatch(addTodoError(e.message));
    }
}
