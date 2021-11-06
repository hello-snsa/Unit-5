const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//Creating schema
const userSchema = new mongoose.Schema({

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 8 },

}, {
    version: false,
    timestamps: true
});


userSchema.pre("save", (next) => {
    if (!this.isModified('password')) {

        return next();
    }

    // bcrypt.hash(this.password, 8, (err, hash) => {
    //     if (err)
    //         return next(err);
    //     this.password = hash;
    //     next();
    // })

    // Hashing
    const hash = bcrypt.hashSync(this.password, 8);

    // Setting hashed password
    this.password = hash;
    return next();

})


userSchema.methods.checkPassword = function (password) {
    const passwordHash = this.password;
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, passwordHash, (err, same) => {
            if (err)
                return reject(err);
            resolve(same)
        })
    })
}


module.exports = mongoose.model('user', userSchema);
