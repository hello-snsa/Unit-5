const router = require('express').Router()
const Student = require('../models/student.model')
const User = require("../models/user.model");
router.post("/", async (req, res) => {
    const student = await Student.create(req.body);
    res.status(201).json({ student });
});


module.exports = router;