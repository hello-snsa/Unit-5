const router = require('express').Router();
const Lecture = require("../model/lecture.model"); l
const User = require("../model/user.model");
const { verifyAuth } = require('../middlewares/verifyToken');



router.post("/", verifyAuth, async (req, res) => {
    const lecture = await Lecture.create(req.body);
    return res.status(201).json({ lecture });
})
