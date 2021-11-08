const express = require('express');
const connect = require('./configs/db');

const userController = require('./controllers/user.controller');

const lectureController = require('./controllers/lecture.controller');

const app = express();
app.use(express.json());

app.use('/users', userController);
app.use('/students', studentController);
app.use('/lectures', lectureController);

app.listen(2244, async () => {
    await connect();
    console.log("Listening to port 2244");
})