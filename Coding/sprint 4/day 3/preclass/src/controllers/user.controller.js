const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

router.post("/", async (req, res) => {
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