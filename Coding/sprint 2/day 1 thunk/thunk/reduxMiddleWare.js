// Ways

//way 1
const middleware1 = (store) => (next) => (actions) => {
    //Logic
};


//way 2
function middleware2(store) {
    return function (next) {
        return function (actions) {
            //logic
        }
    }
}


// with some logic
const middleware01 = (store) => (next) => (actions) => {
    console.log("Action", actions);
    return next(actions);
};
const middleware02 = (store) => (next) => (actions) => {
    console.log("Action", actions);
    return next(actions);
};


