const express = require("express");
const app = express();

const connect = require("./config/db");

const userController = require("./Controllers/user.controller");

const productController = require("./Controllers/product.controller.js");


app.use("/users", userController);
app.use("/products", productController);
app.use(express.json())

const start = async () => {

    await connect();

    app.listen(2244, () => {
        console.log("Listening on port 2244")
    });
};


module.exports = start;
