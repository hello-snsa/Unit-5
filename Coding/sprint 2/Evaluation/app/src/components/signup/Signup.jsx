import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios'
import { Redirect, useHistory } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [interest, setInterest] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();


    const handleSubmit = () => {
        console.log(name, age, address, city, interest)
        const payload = { name, age, email, password, address, city, interest }
        axios.post('http://localhost:3004/users', {
            ...payload

        }).then(() => {
            alert("Registration success ");
            history.push("/");

            <Redirect to="/home" />

        }

        )
    }
    return (
        <Container fixed>


            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                <Stack spacing={3} >
                    <TextField id="standard-basic" label="Name" variant="standard" onChange={(e) => setName(e.target.value)} />
                    <TextField id="standard-basic" label="Age" variant="standard" onChange={(e) => setAge(e.target.value)} />

                    <TextField id="standard-basic" label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)} />
                    <TextField id="standard-basic" label="Password" variant="standard" onChange={(e) => setPassword(e.target.value)} />





                    <TextField id="standard-basic" label="Address" variant="standard" onChange={(e) => setAddress(e.target.value)} />
                    <Box >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">City</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={city}
                                label="City"
                                onChange={(e) => setCity(e.target.value)}
                            >
                                <MenuItem value={'patna'}>Patna</MenuItem>
                                <MenuItem value={'bangalore'}>Bangalore</MenuItem>
                                <MenuItem value={'mumbai'}>Mumbai</MenuItem>
                                <MenuItem value={'hyderabad'}>Hyderabad</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Interested Topics</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={interest}
                                label="Interested Topics"
                                onChange={(e) => setInterest(e.target.value)}
                            >
                                <MenuItem value={'dance'}>dance</MenuItem>
                                <MenuItem value={'tech'}>tech</MenuItem>
                                <MenuItem value={'music'}>music</MenuItem>
                                <MenuItem value={'sports'}>sports</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Button variant="contained" onClick={handleSubmit}>Create account</Button>
                </Stack>
            </Box>
        </Container>
    );
};

export default Signup;