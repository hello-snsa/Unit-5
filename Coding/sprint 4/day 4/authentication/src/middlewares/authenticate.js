const jwt = require('jsonwebtoken');
const User = require('../models/user.model');




// Function to verify the token.
const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
            if (err)
                return reject(err);
            return resolve(payload);
        })
    })
}

/*
    Steps for Authentication.
    ======================================================
    // Step 1: check if authorization header is present
    // if not throw an error.
 
    // Step 2: check if authorization header has a bearer token
    // if not throw an error.
    
    // Step 3: exact the token from the bearer token.
    // decrypt the token and try to fetch the user.
    
    // Step 4: add the user to the request.
    // Step 5: return next.
    ============================================================
*/

const authenticate = async (req, res, next) => {

    // Step 1: check if authorization header is present
    // if not throw an error.
    // const bearerToken = req?.headers?.authorization;
    const bearerToken = req.headers.authorization;

    if (!bearerToken || !bearerToken.startsWith("Bearer "))
        return res.status(401).json({
            status: "failed",
            message: "Something went wrong with the Bearer Token01 " + bearerToken,
        });

    // Step 2: verify the token
    const token = bearerToken.split("Bearer ")[1].trim();

    // Step 3: Retrieve the user . If user exists then good else bad token
    let payload;
    try {
        payload = await verifyToken(token);
        // console.log(payload)

    } catch (err) {
        return res.status(401).json({
            status: "failed",
            message: "Your email or password is not01 correct " + err,
        });
    }

    let user;
    try {
        user = User.findById(payload.id).lean().exec();
    } catch (e) {
        return res.status(500).json({ status: "failed", message: "something went wrong" });
    }

    if (!user) {
        return res.status(401).json({
            status: "failed",
            message: "Your email or password is not02 correct",
        });
    }

    // Step 4: add the user to the request.
    req.user = user;

    // Step 5: return next.
    return next();

}

module.exports = authenticate;