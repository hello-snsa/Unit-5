const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profile_pic_url: { type: String, required: true },
    isAdmin: { type: Boolean, required: false, default: false },
    isInstructor: { type: Boolean, required: false, default: false },

}, {
    versionKey: false,
    timestamp: true
})

module.exports = mongoose.model('user', userSchema)