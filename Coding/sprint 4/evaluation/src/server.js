const express = require('express');
const connect = require('./configs/db');

const app = express();
app.use(express.json());

const userController = require("./controllers/user.controller");
const studentController = require("./controllers/student.controller");

const lectureController = require("./controllers/lecture.controller");



app.use('/users', userController);
app.use('/students', studentController);
app.use('/lectures', lectureController);

app.use((req, res, next) => {
    return res.status(404).send("No route found");
});

app.listen(2244, async () => {
    await connect();
    console.log("Listening to port 2244");
})