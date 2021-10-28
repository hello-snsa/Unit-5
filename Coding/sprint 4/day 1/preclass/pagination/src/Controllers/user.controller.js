const express = require('express');
const router = express.Router();

const User = require('../Models/user.model');

let userDetails;
let genders;

router.get("/", async (req, res) => {

    const page = +req.query.page || 1;
    const size = +req.query.limit || 10;

    const offset = (page - 1) * size;

    userDetails = await User.find({}).skip(offset).limit(size).lean().exec();

});

router.get("/female", async (req, res) => {
    const page = +req.query.page || 1;
    const size = +req.query.limit || 10;

    const offset = (page - 1) * size;

    genders = "Female";
    userDetails = await User.find({ gender: { $eq: genders } }).skip(offset).limit(size).lean().exec();
    // counting totalPages 
    const totalPages = Math.ceil(
        await User.find({ gender: { $eq: genders } })
            .countDocuments()
            .lean()
            .exec()) / size;

    console.log(req.query)

    res.status(200).json({ data: { userDetails, totalPages } });

});
router.get("/male", async (req, res) => {

    const page = +req.query.page || 1;
    const size = +req.query.limit || 10;

    const offset = (page - 1) * size;
    genders = "Male";
    userDetails = await User.find({ gender: { $eq: genders } }).skip(offset).limit(size).lean().exec();

    // counting totalPages 
    const totalPages = Math.ceil(
        await User.find({ gender: { $eq: genders } })
            .countDocuments()
            .lean()
            .exec()) / size;

    console.log(req.query)

    res.status(200).json({ data: { userDetails, totalPages } });

});

module.exports = router;
