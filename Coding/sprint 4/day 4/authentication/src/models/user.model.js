const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//Creating schema
const userSchema = new mongoose.Schema({

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 8 },

}, {
    versionKey: false,
    timestamps: true
});

// Function for Hashing.
userSchema.pre("save", function (next) {
    if (!this.isModified('password')) {

        return next();
    }

    // Hashing done below.
    const hash = bcrypt.hashSync(this.password, 8);

    // Setting hashed password
    this.password = hash;
    return next();

})

// Checking Password.
userSchema.methods.checkPassword = function (password) {

    return bcrypt.compareSync(password, this.password)

}


module.exports = mongoose.model('user', userSchema);
