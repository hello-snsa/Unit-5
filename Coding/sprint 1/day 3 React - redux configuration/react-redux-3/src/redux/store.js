import { createStore } from 'redux';
import { reducerfn } from "./reducer.js";

// const initialState = {

//     todos: {
//         isLoading: false,
//         isError: false,
//         data: [],
//     },


// };

// export const store = createStore(reducerfn, initialState);
export const store = createStore(reducerfn);


// store.subscribe(function () {
//     console.log("Store updated");
// });


// console.log("Before update", store.getState());
// console.log("calling again before dispatch", store.getState());
// store.dispatch(addTodo("Learn React"));
// console.log("After update ", store.getState());

