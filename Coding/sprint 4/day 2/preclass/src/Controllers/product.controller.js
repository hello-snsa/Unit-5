const express = require('express');
const Product = require("../Models/product.model.js")
const router = express.Router();

const upload = require("../utils/file-upload.js");

router.post("/", upload.single("productImages"),
    async (req, res) => {
        const product = await Product.create({
            name: req.body.name,
            price: req.body.price,
            image_url: req.file.path,
        });
        res.status(201).json({ data: product });
    });

router.post("/multiple", upload.array("productImages"),
    async (req, res) => {
        const files = req.files.map((file) => file.path);
        const product = await Product.create({
            name: req.body.name,
            price: req.body.price,
            image_url: files,
        });
        res.status(201).json({ data: product });
    });


module.exports = router;
