const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, "secret", (err, user) => {
            if (err) {
                return res.status(401).json("Token not valid");
            }
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json("you are not authenticated");
    }
};

const checkAcces = (req, res, next) => {
    verifyToken(req, res, async () => {
        if (req.user.isAdmin || req.user.isInstructor) {

            next();
        } else {
            return res.status(401).json("you are not allowed to do that");
        }
    });
};

module.exports = { checkAcces };