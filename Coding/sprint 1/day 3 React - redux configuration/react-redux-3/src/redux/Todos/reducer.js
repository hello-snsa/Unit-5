import { ADD_TODO_LOADING, ADD_TODO_SUCCESS, ADD_TODO_ERROR, GET_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING } from "./actionTypes.js"


const initialState = {

    todos: {
        isLoading: false,
        isError: false,
        data: [],
    }
}


export const reducerfn = (state = initialState, { type, payload }) => {

    switch (type) {

        // for Post cases

        //case 1
        case ADD_TODO_LOADING:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    isLoading: true,
                }
            };

        //case 2
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    isLoading: false,
                }
            }

        //case 3
        case ADD_TODO_ERROR:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    isLoading: false,
                    isError: true,
                }

            };

        // for Get cases


        //case 4
        case GET_TODO_SUCCESS:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    isLoading: false,
                    data: [...payload],
                }
            }

        //case 5
        case GET_TODO_ERROR:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    isLoading: false,
                    isError: true,

                }
            }

        //case 6
        case GET_TODO_LOADING:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    isLoading: true,

                }
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
