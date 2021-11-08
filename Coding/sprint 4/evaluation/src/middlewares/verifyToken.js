const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;

    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC_KEY, (err, user) => {
            if (err) {
                return res.status(401).json("Token invalid" + err)
            }
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json("you are not authorized to perform this action.")
    }
};

const verifyAuth = (req, res, next) => {
    verifyToken(req, res, async () => {
        if (req.user.isAdmin || req.user.isInstructor) {
            next();
        } else {
            return res.status(401).json("You are not authorized");
        }
    });
};

module.exports = { verifyAuth };
