import { combineReducers, createStore } from 'redux';
import { reducerfn } from "./Todos/reducer.js";
import { authReducer } from './Auth/reducer.js';


const rootReducer = combineReducers({
    todosStore: reducerfn, auth: authReducer,
})

// export const store = createStore(reducerfn);
// console.log("auth:", auth.todos)

// export const store = createStore(authReducer);
export const store = createStore(rootReducer);

// const initialState = {

//     todos:   {
//         isLoading: false,
//         isError: false,
//         data: [],
//     },  


// };

// export const store = createStore(reducerfn, initialState);




// store.subscribe(function () {
//     console.log("Store updated");
// });


// console.log("Before update", store.getState());
// console.log("calling again before dispatch", store.getState());
// store.dispatch(addTodo("Learn React"));
// console.log("After update ", store.getState());

