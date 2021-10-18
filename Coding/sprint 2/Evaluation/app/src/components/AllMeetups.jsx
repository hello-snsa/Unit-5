import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import axios from 'axios';
import MeetupCard from './MeetupCard';


export default function AllMeetups() {
    const [meet, setMeet] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);

        axios.get("http://localhost:3004/allMeets")
            .then(({ data }) => {
                setMeet(data);
                setLoading(false);
            }
            )
    }, [])


    return (
        <Box>
            {
                loading ? (<Box>Loading...</Box>) :
                    (meet.map((e) => {


                        return <MeetupCard keyId={e.id} e={e} />


                    }))
            }

        </Box>
    )
}
