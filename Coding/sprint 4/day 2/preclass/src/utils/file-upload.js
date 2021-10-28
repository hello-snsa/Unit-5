const path = require("path");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        // console.log("my directory current address ", __dirname)
        callback(null, path.join(__dirname, "../uploads"));
    },
    filename: function (req, file, callback) {
        callback(null, new Date().toISOString() + file.originalname);
    },
});

const fileFilter = function (req, file, callback) {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/png") {
        callback(null, true);
    } else {
        callback(null, false);
    }

};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
});

module.exports = upload;