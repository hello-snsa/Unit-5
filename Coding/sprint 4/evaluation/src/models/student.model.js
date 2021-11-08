const mongoose = require('mongoose');
const User = require('./user.model');

const studentSchema = new mongoose.Schema({
    roll: { type: Number, required: true },
    batch: { type: String, required: true },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        req: true
    },
}, {
    versionKey: false,
    timestamp: true
})

module.exports = mongoose.model('student', studentSchema)