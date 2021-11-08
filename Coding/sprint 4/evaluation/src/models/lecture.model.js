const mongoose = require('mongoose');
const User = require('./user.model');

const lectureSchema = new mongoose.Schema({
    lec_name: { type: String, required: true },
    instructor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        req: true
    },
},
    {
        versionKey: false,
        timestamps: true
    })

module.exports = mongoose.model('lecture', lectureSchema);
