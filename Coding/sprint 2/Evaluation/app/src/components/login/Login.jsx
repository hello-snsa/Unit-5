import { Container, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const handleSubmit = () => {

        axios.get("http://localhost:3004/users")
            .then(({ data }) => {
                const users = data;

                console.log('users', users);

                for (let i = 0; i < users.length; i++) {
                    if (email === users[i].email && password === users[i].password) {
                        setUser(users[i])
                        alert("welcome " + users[i]);
                        break;
                    }
                }


            })
    }

    return (
        <Container fixed>

            <Box
                sx={{

                    height: "100vh",
                    backgroundColor: 'skyBlue'
                        >
                        <Stack spacing={3}>
                            <TextField
                                id="time"
                                type="time"
                                inputProps={inputProps}

                            />;

                        </Box>

        </Container>
    )
}



export default Login
