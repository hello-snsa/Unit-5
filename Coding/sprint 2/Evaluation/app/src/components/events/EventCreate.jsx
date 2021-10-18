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
const EventCreate = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('');
    const [rating, setRating] = useState('');
    const [attende, setAttende] = useState('')
    const [city, setCity] = useState('')

    const handleSubmit = () => {

        const payload = { title, description, date, rating, city }
        axios.post('http://localhost:3004/allmeets', {
            ...payload
        })
    }
    return (
        <Container fixed>


            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                <Stack spacing={3} >
                    <TextField id="standard-basic" label="Title" variant="standard" onChange={(e) => setTitle(e.target.value)} />
                    <TextField id="standard-basic" label="Description" variant="standard" onChange={(e) => setDescription(e.target.value)} />
                    <input type="datetime-local" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} nstyle={{ backgroundColor: "skyBlue" }} />

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

export default EventCreate;