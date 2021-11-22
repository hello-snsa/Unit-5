// 1: create schema
// 2. export the model

const mongoose = require("mongoose");

// creating schema
const productSchema = new mongoose.Schema({

    title: { type: String, required: true },
    price: { type: Number, required: true },
    image_urls: [{ type: String, required: true }],

}, {
    versionKey: false,
    timestamps: true
});

// exporting the model
module.exports = mongoose.model("product", productSchema);