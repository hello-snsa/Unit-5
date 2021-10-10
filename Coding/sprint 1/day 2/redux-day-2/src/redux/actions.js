import { ADD_COUNT, ADD_TODO } from "./actionTypes.js";

export const addCount = (data) => {
    return { type: ADD_COUNT, payload: data };

};

export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: {
            status: false,
        }
    };
};