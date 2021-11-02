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
    //chaining
    body("gender").notEmpty().withMessage("Gender should not be empty").isLength({ max: 5 }).withMessage("please enter your gender in sort form. for eg. M for male, F for Female and Other for Other categories"),
    body("age").isLength({ min: 1 }).withMessage("please enter your age")
        //custom error
        .custom((e) => {
            if (e <= 13) {
                throw new Error("user must be above 13 ")
            }
            else return true
        }),
    body("aadhar").notEmpty()
        .custom(async (e) => {
            const user = await User.findOne({ aadhar: e }).lean().exec();
            if (user) throw new Error("User already registered");
            return true;
        }),
    body("mobile").notEmpty()
        .custom(async (e, { req }) => {
            const user = await User.findOne({
                mobile: e,
                first_name: req.body.first_name,
            }).lean().exec();
            if (user) throw new Error("user already exists")
        }),

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