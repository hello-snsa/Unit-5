const express = require('express');
const connect = require('./configs/db');


const app = express();
app.use(express.json());


app.listen(2244, async () => {
    await connect();
    console.log("Listening to port 2244");
})