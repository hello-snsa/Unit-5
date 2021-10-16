
const app = require("express")();

app.use((req, res, next) => {
    if (req.body.token) {
        next()
    }
    return req.send("Not authorized");
});

app.get("/");