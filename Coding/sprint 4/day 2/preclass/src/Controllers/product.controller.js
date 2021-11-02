const express = require('express');

const Product = require("../Models/product.model.js")
const upload = require("../utils/file-upload");
const router = express.Router();


router.post("/single", upload.single("productImages"),
    async (req, res) => {
        const product = await Product.create({
            name: req.body.name,
            price: req.body.price,
            image_url: req.file.path,
        });
        return res.status(201).send(product);
        // return res.status(201).json({ data: product });
    });

router.post("/multiple", upload.array("productImages"),
    async (req, res) => {
        const files = req.files.map((file) => file.path);
        const product = await Product.create({
            name: req.body.name,
            price: req.body.price,
            image_url: files,
        });
        // res.status(201).json({ data: product });
        return res.status(201).send(product);
    });


module.exports = router;
