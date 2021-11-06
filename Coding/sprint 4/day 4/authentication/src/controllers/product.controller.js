const fs = require('fs');
const express = require("express");

const Product = require("../models/product.model");
const upload = require("../middlewares/file-upload");

const router = express.Router();

//POST routing
router.post("/single", upload.single("productImages"), async (req, res) => {
    try {
        // console.log(req.file);
        const product = await Product.create({
            title: req.body.title,
            price: req.body.price,
            image_urls: req.file.path
        })
        return res.status(201).send(product);

    } catch (err) {
        return res.status(400).json({ status: "failed", message: err });
    }
});


router.post("/multiple", upload.array("productImages"),
    async (req, res) => {
        try {
            const files = req.files.map((file) => file.path);
            const product = await Product.create({
                title: req.body.title,
                price: req.body.price,
                image_urls: files,
            });
            // res.status(201).json({ data: product });
            return res.status(201).send(product);
        }
        catch (err) {
            files.map((path) => fs.unlinkSync(path));
            return res.status(400).json({ status: "failed", message: err });
        }
    });

//Getting data


// router.get("/", async (req, res) => {

//     try {
//         //Adding pagination
//         const page = +req.query.page || 1;
//         const size = +req.query.size || 2;

//         const offset = (page - 1) * size;

//         // const users = await User.find().lean().exec();
//         const users = await User.find().skip(offset).limit(size).lean().exec();

//         //Getting total no. of documents
//         const totalPages = Math.ceil((await User.find().countDocuments()) / size);

//         // return res.status(200).json({ users: users });
//         return res.status(200).json({ users: users, totalPages });

//     } catch (err) {
//         return res.status(400).json({ status: "failed", message: err.message });
//     }
// })


module.exports = router;