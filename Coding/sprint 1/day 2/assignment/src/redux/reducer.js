import { ADD_COUNT, SUB_COUNT, ADD_TODO, SET_AGE } from "./actionTypes.js"

export const reducerfn = (state, { type, payload }) => {

    switch (type) {

        //case 1
        case ADD_COUNT:
            return {
                ...state,
                counter: state.counter + payload,
            }
        // break;


        //case 2
        case SUB_COUNT:
            return {
                ...state,
                counter: state.counter - payload,
            }

        //case 3
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { ...payload }]
            }

        //case 4
        case SET_AGE:
            return {
                ...state,
                // age: payload
                age: state.age + state.counter
            }


        //default case
        default:
            {
                console.log(" Reached to default case")
                return { ...state }
            }
    }

    // return state;
}
