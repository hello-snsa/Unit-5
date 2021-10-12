import { ADD_TODO_LOADING, ADD_TODO_SUCCESS, ADD_TODO_ERROR } from "./actionTypes.js"


const initialState = {

    todos: {
        isLoading: false,
        isError: false,
        data: [],
    }
}


export const reducerfn = (state = initialState, { type, payload }) => {

    switch (type) {

        //case 1
        case ADD_TODO_LOADING:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    isLoading: true,
                }
            };

        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    isLoading: false,
                }
            }

        case ADD_TODO_ERROR:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    isLoading: false,
                    isError: true,
                }

            };

        //default case
        default:
            {
                console.log(" Reached to default case")
                return { ...state }
            }
    }

    // return state;
}
