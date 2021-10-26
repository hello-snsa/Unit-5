const express = require("express");
const app = express();

const connect = require("./config/db");

const userController = require("./Controllers/user.controller");

app.use("/users", userController);

const start = async () => {

    await connect();

    app.listen(2244, () => {
        console.log("Listening on port 2244")
    });
};


module.exports = start;
