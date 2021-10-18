import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState('')
    const handleSubmit = () => {
        console.log(email, password);

        axios.get("http://localhost:3001/users").then(({ data }) => {
            const users = data
            console.log('users:', users)
            for (let i = 0; i < users.length; i++) {
                if (email === users[i].email && password === users[i].password) {
                    console.log('login match')
                    setUser(users[i])
                    console.log(user)
                    break;
                }

            }
        });
    };
    return (
        <Container fixed>
            <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
                <Stack spacing={3}>
                    <TextField
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        id="standard-basic"
                        label="Password"
                        variant="standard"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button variant="contained" onClick={handleSubmit}>
                        Login
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
};

export default Login;