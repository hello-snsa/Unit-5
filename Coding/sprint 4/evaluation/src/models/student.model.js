const mongoose = require('mongoose')
const User = require('./user.model')
const studentSchema = new mongoose.Schema({
    roll_no: { type: Number, required: true },
    batch_name: { type: String, required: true },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        req: true
    },

}, { versionKey: false, timestamps: true })

module.exports = mongoose.model('student', studentSchema)