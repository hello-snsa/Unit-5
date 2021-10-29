const express = require("express");

const router = express.Router();

const User = require("../models/product.model");

const sendEmail = require('../utils/sendmail');

router.post("/", async (req, res) => {

    try {
        const user = await User.create(req.body);

        await sendEmail({
            to: user.email, // list of receivers
            subject: "Demo mail", // Subject line
            text: "Hello bro...", // plain text body
            html: "<h1>Hello there. This is a test mail.</h1>",
        });


        return res.status(201).json({ user: user });

    } catch (err) {
        return res.status(400).json({ status: "failed", message: err });
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