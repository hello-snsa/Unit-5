const express = require("express");
const app = express();

const connect = require("./config/db");

const userController = require("./Controllers/user.controller");

const productController = require("./Controllers/product.controller.js");


app.use(express.json())
app.use("/products", productController);

//for 404 routing *note: put this as the last route
app.use(function (req, res, next) {
    return res.status(404).send("No route found")
});

const start = async () => {

    app.listen(2344, async () => {
        await connect();

        console.log("Listening on port 2344")
    });
};


module.exports = start;
