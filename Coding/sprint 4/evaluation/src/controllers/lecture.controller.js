const router = require('express').Router();
const Lecture = require("../model/lecture.model"); l
const User = require("../model/user.model");
const { verifyAuth } = require('../middlewares/verifyToken');



router.post("/", verifyAuth, async (req, res) => {
    const lecture = await Lecture.create(req.body);
    return res.status(201).json({ lecture });
})

router.get("/", async (req, res) => {
    const lectures = await Lecture.find().populate("instructor_id").lean().exec();
    return res.status(201).json({ lectures });
});

router.get("/:id", async (req, res) => {
    const lectures = await Lecture.findById(req.params.id).populate("instructor_id").lean().exec();

    return res.status(201).json({ lectures });
});


router.patch("/:id", checkAccess, async (req, res) => {
    const lectures = await Lecture.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    return res.status(201).json({ lectures })

})


router.delete("/:id", verifyAuth, async (req, res) => {
    const lectures = await Lecture.findByIdAndDelete(req.params.id, req.body);

    return res.status(201).json({ lectures });

});

module.exports = router;

