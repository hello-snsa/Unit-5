//for establising connection
const express = require('express');

//to connect with database
const connect = require("./configs/db");
//
const userController = require("./controllers/user.controller");
//
const app = express();

//middleware express.json()
app.use(express.json());
//
// Writing base route as a middleware
app.use("/users", userController);

//

app.listen(2244, async () => {

    await connect();
    console.log("Listening at port 2244")
})
