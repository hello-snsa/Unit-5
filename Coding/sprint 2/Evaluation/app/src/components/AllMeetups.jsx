import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import axios from 'axios';


export default function AllMeetups() {
    const [meet, setMeet] = useState([]);


    useEffect(() => {


        axios.get("http://localhost:3004/")


    })


    return (
        <div>

        </div>
    )
}
