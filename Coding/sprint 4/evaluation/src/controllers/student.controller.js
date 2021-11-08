const router = require('express').Router();
const Student = require("../model/student.model"); l

router.post("/", async (req, res) => {
    const students = await Student.create(req.body);
    res.status(201).json({ students });
});

module.exports = router;
