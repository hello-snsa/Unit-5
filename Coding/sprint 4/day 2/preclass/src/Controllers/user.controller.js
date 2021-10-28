const express = require('express');
const router = express.Router();

const User = require('../Models/user.model');

router.get("/", async (req, res) => {

    const page = +req.query.page || 1;
    const size = +req.query.limit || 10;

    const offset = (page - 1) * size;

    const users = await User.find({}).skip(offset).limit(size).lean().exec();

    const maleUsers = await User.find({ gender: { $eq: "Male" } }).skip(offset).limit(size).lean().exec();

    const femaleUsers = await User.find({ gender: { $eq: "Female" } }).skip(offset).limit(size).lean().exec();

    //counting totalPages 
    const totalPages = Math.ceil(
        await User.find({ gender: { $eq: "Female" } })
            .countDocuments()
            .lean()
            .exec()) / size;

    console.log(req.query)

    // res.status(200).json({ data: users });
    // res.status(200).json({ data: maleUsers });
    res.status(200).json({ data: { femaleUsers, totalPages } });

});


module.exports = router;
