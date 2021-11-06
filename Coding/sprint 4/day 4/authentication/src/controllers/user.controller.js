const register = (req, res) => {
    return res.send("Register");
}

const login = (req, res) => {
    return res.send("Login");
}

module.exports = { register, login };