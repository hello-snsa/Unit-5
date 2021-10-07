

class Store {
    constructor(reducer, initialState) {
        this.reducer = reducer;
        this.state = initialState;
    }

    getState() {
        return this.state;
    }


    dispatch(action) {

        //incoming:  { type: "ADD_COUNT", payload: 1 }
        this.state = this.reducer(this.state, action)

    }
}


// Reducer signature 
const reducer = (state, { type, payload }) => {

    switch (type) {

        //case 1
        case "ADD_COUNT":
            return {
                ...state,
                counter: state.counter + payload,
            }
        // break;


        //case 2

    }

    // return state;
}




//initial state
const initialState = {
    counter: 0,
}


const store = new Store(reducer, initialState);


function incrementIt() {

    store.dispatch({ type: "ADD_COUNT", payload: 1 });
}

console.log(store.getState());
incrementIt()
console.log(store.getState());
incrementIt()
console.log(store.getState());




/*

// using function

function Store(reducerfn, initialState) {
    this.reducer = reducerFn;
    this.state = initialState;
}

Store.prototype.getState = function () {
    return this.state;
}

*/