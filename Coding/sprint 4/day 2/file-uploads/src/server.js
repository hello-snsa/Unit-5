//for establising connection
const express = require('express');

//to connect with database
const connect = require("./configs/db");
//
const productController = require("./controllers/product.controller");
//
const app = express();

//middleware express.json()
app.use(express.json());
//
// Writing base route as a middleware
// app.use("/users", userController);
app.use("/products", productController);

//for 404 routing *note: put this as the last route
app.use(function (req, res, next) {
    return res.status(404).send("No route found")
});


app.listen(2244, async () => {

    await connect();
    console.log("Listening at port 2244")
});
