import { ADD_COUNT, ADD_TODO, SET_AGE, SUB_COUNT } from "./actionTypes.js";

export const addCount = (data) => {
    return { type: ADD_COUNT, payload: data };

};

export const subCount = (data) => {
    return { type: SUB_COUNT, payload: data };

};

export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: {
            status: false,
            title: data
        }
    };
};

export const setAge = (data) => {
    return {
        type: SET_AGE,
        payload: data
    }
}

