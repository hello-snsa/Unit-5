import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { reducerfn } from "./Todos/reducer.js";
import { authReducer } from './Auth/reducer.js';


//Dummy middleware

// const middleware01 = (store) => (next) => (actions) => {
//     console.log("Action", actions);
//     return next(actions);
// };


//

//working Middleware
const middleware02 = (store) => (next) => (action) => {

    if (typeof action === "function") {
        return action(store.dispatch)
    }
    next(action);
    return
};


//
const rootReducer = combineReducers({
    todosStore: reducerfn, auth: authReducer,
})


//using Traditional way
// export const store = createStore(rootReducer, fun());


// function fun() {
//     middleware01();
//     return window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// }

// Using composition

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(middleware02),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    ));


