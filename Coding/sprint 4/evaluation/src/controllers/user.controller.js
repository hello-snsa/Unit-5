const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');

const upload = require("../middlewares/fileUpload");
const User = require("../models/user.model");



router.post("/register", upload.single("profilePic"), async (req, res) => {
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        profile_pic_url: req.file.path,
        isAdmin: req.body.isAdmin,
        isInstructor: req.body.isInstructor,
    });
    res.status(201).json({ user });
});




