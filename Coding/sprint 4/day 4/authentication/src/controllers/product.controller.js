const fs = require('fs');
const express = require("express");

const Product = require("../models/product.model");
const authenticate = require("../middlewares/authenticate");

const upload = require("../middlewares/file-upload");


const router = express.Router();


//Getting data
router.get("/getProducts", authenticate, async (req, res) => {

    try {
        const products = await Product.find({}).lean().exec();

        return res.status(200).send(products);
    }
    catch (err) {
        return res.status(400).json({
            status: "failed", message: err.message
        });
    }
});

// POST data

router.post("/addProducts", upload.array("productImages"),

    async (req, res) => {
        try {
            const files = req.files.map((file) => file.path);
            const product = await Product.create({
                title: req.body.title,
                price: req.body.price,
                image_urls: files,
            });
            return res.status(201).send(product);
        }
        catch (err) {
            files.map((path) => fs.unlinkSync(path));
            return res.status(400).json({ status: "failed", message: err });
        }
    });

module.exports = router;