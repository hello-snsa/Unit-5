const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    id: { type: Number, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    ip_address: { type: String },
    age: { type: Number, required: true },
    aadhar: { type: Number, required: true, unique: true },
    mobile: { type: Number, required: true },

})

module.exports = mongoose.model('user', userSchema);
