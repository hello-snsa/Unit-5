const express = require('express');
const router = express.Router();

const Student = require("../models/student.model");

router.post("/", async (req, res) => {
    const students = await Student.create(req.body);
    res.status(201).json({ students });
});

module.exports = router;
