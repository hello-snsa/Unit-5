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
import { Redirect, useHistory } from "react-router-dom";
import axios from 'axios'
const EventCreate = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [rating, setRating] = useState('')
    const [attende, setAttende] = useState([])
    const [city, setCity] = useState('')
    const history = useHistory();


    const handleSubmit = () => {

        console.log(title, description, date, rating, city)
        const payload = { title, description, date, rating, city, attende }
        axios.post('http://localhost:3004/allMeets', {
            ...payload
        }).then(() => {
            history.push("/")

        })
    }
    return (
        <Container fixed>


            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                <Stack spacing={3} >
                    <TextField id="standard-basic" label="Title" variant="standard" onChange={(e) => setTitle(e.target.value)} />
                    <TextField id="standard-basic" label="Description" variant="standard" onChange={(e) => setDescription(e.target.value)} />
                    <input type="datetime-local" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} style={{ backgroundColor: '#cfe8fc' }} />
                    <TextField id="standard-basic" label="Rating" variant="standard" onChange={(e) => setRating(e.target.value)} />
                    <Box >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Event City</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={city}
                                label="Event City"
                                onChange={(e) => setCity(e.target.value)}
                            >
                                <MenuItem value={'patna'}>Patna</MenuItem>
                                <MenuItem value={'bangalore'}>Bangalore</MenuItem>
                                <MenuItem value={'mumbai'}>Mumbai</MenuItem>
                                <MenuItem value={'hyderabad'}>Hyderabad</MenuItem>
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