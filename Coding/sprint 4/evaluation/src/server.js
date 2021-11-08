const express = require('express');
const connect = require('./configs/db');

const userController = require('./controller/user.controller');

const lectureController = require('./controller/lecture.controller');

const app = express();
app.use(express.json());

app.use('/users', userController);
app.use('/students', studentController);
app.use('/lectures', lectureController);

app.listen(2244, async () => {
    await connect();
    console.log("Listening to port 2244");
})