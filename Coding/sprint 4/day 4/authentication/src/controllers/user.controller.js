/*
    5 steps to register a user:
    ============================
// 1: check if user already exists.
// 2: if user exists then throw an error.
// 3: else create a user and then hash the password.
// 4: create a token.
// 5: Return Token and user info to the frontend.
*/

/*
    6 steps to Signin a user:
    ==========================
// 1: check if user already exists.
// 2: if user doesn't exists then throw an error.
// 3: if user exists then match the password.
// 4: if password don't match then through an error.
// 5: if password matches then create the token
// 6: return the token to the frontend
*/

require('dotenv').config();
const jwt = require("jsonwebtoken");

const User = require("../models/user.model");

// Function for creating Token:
const newToken = (user) => {
    return jwt.sign(
        { user: user },
        process.env.JWT_SECRET_KEY,
        { expiresIn: 60 * 5 });
};

//Creating new user
const signup = async (req, res) => {

    try {
        // step 1:check if user already exists.
        let user = await User.findOne({ email: req.body.email }).lean().exec();

        // step 2:if user exists then throw an error.
        if (user) {
            return res.status(400).json({ status: "error", message: "User already exists" });

        }
        // step 3: if user doesn't exist then create a user and then hash the password.
        user = await User.create(req.body);

        // step 4: Create the Token
        const token = newToken(user);

        // step 5: Return Token and user info to the frontend.
        return res.status(201).json({ user, token });

    } catch (err) {
        return res.status(500).json({ status: "failed", message: "something went wrong " + err });
    }
};

const signin = async (req, res) => {
    //step 1: find the user

    const user = await User.findOne({ email: req.body.email }).exec();

    // step 2: if user doesn't exists then throw an error.
    try {
        if (!user)
            return res.status(401).json({ status: "failed", message: "email or password is not correct" });
    } catch (err) {
        return res.status(500).json({ status: "failed", message: "something went wrong " + err })
    }

    //step 3: if the user is present then match the userId with the password

    //decrypt the password first
    try {
        const match = await user.checkPassword(req.body.password);

        // 4: if password don't match then through an error.
        if (!match) {
            return res.status(401)
                .json({ status: "failed", message: "password incorrect" });
        }
    }
    catch (err) {
        return res.status(500).json({ status: "failed", message: "something went wrong " + err })
    }


    // 5: if password matches then create the token
    const token = newToken(user);

    // 6: return the token to the frontend
    return res.status(201).json({ data: { token } });

};



const getAllUsers = async (req, res) => {
    try {

        const users = await User.find({}).select('-password').lean().exec();

        return res.status(200).json({ data: users });


    } catch (err) {
        return res.status(400).json({ status: "failed", message: err });
    }

}

module.exports = { signup, signin, getAllUsers };