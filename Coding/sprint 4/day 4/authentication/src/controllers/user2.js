const express = require("express");

const { body, validationResult } = require('express-validator');

const router = express.Router();

const User = require("../models/user.model");
const protect = require("../middlewares/protect");



//note: 1st is for route and last is for callback function, and everything in between is middleware
router.post("/",

    body("email").isEmail().withMessage("please enter valid email"),
    body("password").isLength({ min: 8 }).withMessage("please enter 8 digit password"),


    async (req, res) => {

        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ data: errors.array() });
            }

            const user = await User.create(req.body);
            return res.status(201).json({ user: user })

        } catch (err) {
            return res.status(400).json({ status: "failed", message: err.message });
        }
    });

//Getting data


router.get("/", protect, async (req, res) => {
    console.log("req user", await req.user);
    try {

        const users = await User.find({}).select('-password').lean().exec();

        return res.status(200).json({ data: users });


    } catch (err) {
        return res.status(400).json({ status: "failed", message: err });
    }
})


module.exports = router;