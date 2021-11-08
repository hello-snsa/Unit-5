const router = require("express").Router();
const Lecture = require("../models/lecture.model");
const User = require("../models/user.model");
const { checkAcces } = require('../middlewares/verifyToken')


router.post("/", checkAcces, async (req, res) => {
    const lecture = await Lecture.create(req.body);
    return res.status(201).json({ lecture });
});

router.get("/", async (req, res) => {
    const lectures = await Lecture.find().populate("inst_id").lean().exec();
    return res.status(201).json({ lectures });
});

router.get("/:id", async (req, res) => {
    const lectures = await Lecture.findById(req.params.id)
        .populate("inst_id")
        .lean()
        .exec();
    return res.status(201).json({ lectures });
});

router.patch("/:id", checkAcces, async (req, res) => {
    const lectures = await Lecture.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    return res.status(201).json({ lectures });
});
router.delete("/:id", checkAcces, async (req, res) => {
    const lectures = await Lecture.findByIdAndDelete(req.params.id, req.body);

    return res.status(201).json({ lectures });
});

module.exports = router;