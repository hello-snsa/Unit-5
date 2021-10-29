// 1: create schema
// 2. creating the model

const mongoose = require("mongoose");

// creating schema
const userSchema = new mongoose.Schema({

    title: { type: String, required: true },
    price: { type: Number, required: true },
    image_urls: [{ type: String, required: true }],

}, {
    versionKey: false,
    timestamps: true
});


// 2. creating the model
// const schema = mongoose.model("user", userSchema);

// module.exports = schema;

module.exports = mongoose.model("product", userSchema);