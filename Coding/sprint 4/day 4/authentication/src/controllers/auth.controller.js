// const express = require("express");
// const router = express.Router();

require('dotenv').config();
const jwt = require("jsonwebtoken");

const User = require("../models/user.model");

const newToken = (user) => {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY);
};

const signup = async (req, res) => {

    try {
        const user = await User.create(req.body);
        const token = newToken(user);

        return res.status(201).json({ data: { token } });
    } catch (err) {
        return res.status(500).json({ status: "failed", message: "something went wrong " + err });
    }
};

const signin = async (req, res) => {
    //step 1: find the user

    const user = await User.findOne({ email: req.body.email }).exec();

    try {
        if (!user)
            return res.status(401).json({ status: "failed", message: "email or password is not correct" });
    } catch (err) {
        return res.status(500).json({ status: "failed", message: "something went wrong " + err })
    }

    //step 2: if the user is present then match the userId with the password

    //decrypt the password first
    try {
        const match = await user.checkPassword(req.body.password);
        // console.log("match ", match)

        if (!match) {
            return res.status(401)
                .json({ status: "failed", message: "password incorrect" });
        }
    }
    catch (err) {
        return res.status(500).json({ status: "failed", message: "something went wrong " + err })
    }


    // Step 3: if id and password matches, Create a new token and return this token to frontend.

    const token = newToken(user);
    return res.status(201).json({ data: { token } });

};

module.exports = { signup, signin };