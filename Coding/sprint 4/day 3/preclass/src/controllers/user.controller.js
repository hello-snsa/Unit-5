const express = require("express");

const { body, validationResult } = require('express-validator');

const router = express.Router();

const User = require("../models/user.model");

//note: 1st is for route and last is for callback function, and everything in between is middleware
router.post("/",

    body("id").isLength({ min: 1 }).withMessage("please enter id"),
    body("first_name").isLength({ min: 1 }).withMessage("please enter your first name"),
    body("last_name").isLength({ min: 1 }).withMessage("please enter your last name"),
    body("email").isEmail().withMessage("please enter valid email"),
    body("pincode").isLength({ min: 6, max: 6 }).withMessage("please enter the 6 digit pincode"),
    body("gender").isLength({ min: 1, max: 5 }).withMessage("please enter your gender in sort form. for eg. M for male, F for Female and Other for Other categories"),
    body("age").isLength({ min: 1 }).withMessage("please enter your age"),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ data: errors.array() });
        }
        const user = await User.create(req.body);
        return res.status(201).json({ user: user })

    });

//Getting data


router.get("/", async (req, res) => {

    try {
        //Adding pagination
        const page = +req.query.page || 1;
        const size = +req.query.size || 2;

        const offset = (page - 1) * size;

        // const users = await User.find().lean().exec();
        const users = await User.find().skip(offset).limit(size).lean().exec();

        //Getting total no. of documents
        const totalPages = Math.ceil((await User.find().countDocuments()) / size);

        // return res.status(200).json({ users: users });
        return res.status(200).json({ users: users, totalPages });

    } catch (err) {
        return res.status(400).json({ status: "failed", message: err.message });
    }
})


module.exports = router;