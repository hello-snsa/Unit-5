// 1: create schema
// 2. creating the model

const mongoose = require("mongoose");

// creating schema
const userSchema = new mongoose.Schema({

    first_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    mobile: { type: String, required: false }
}, {
    versionKey: false,
    timestamps: true
});


// 2. creating the model
// const schema = mongoose.model("user", userSchema);

// module.exports = schema;

module.exports = mongoose.model("user", userSchema);