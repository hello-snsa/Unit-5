const router = require("express").Router();
const User = require("../models/user.model");
const upload = require("../middlewares/fileUpload");
const jwt = require("jsonwebtoken");
router.post("/register", upload.single("profileImage"), async (req, res) => {
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        profile_pic_url: req.file.path,
        isAdmin: req.body.isAdmin,
        isInstructor: req.body.isInstructor,

    });
    res.status(201).json({ user });
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(401).json("wrong credentials");
        user.password != req.body.password &&
            res.status(401).json("wrong credentials");

        const accessToken = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin, isInstructor: user.isInstructor },
            "secret",
            { expiresIn: "3d" }
        );
        const { password, ...others } = user._doc
        res.status(201).json({ ...others, accessToken });
    } catch (err) {
        res.status(500).json({ err });
    }
});

module.exports = router;