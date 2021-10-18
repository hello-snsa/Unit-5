import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

export default function MeetupCard({ keyId, e }) {
    return (
        <div>

            <div>
                <Box>
                    <img src="https://secure-content.meetupstatic.com/images/classic-events/499295749/398x224.webp" alt="meetImage" />
                </Box>

                <Box>
                    <Box>
                        <Box>
                            <Typography varient="p">{e.date}</Typography>

                        </Box>
                        <Box>
                            <Typography varient="p">{e.title}</Typography>

                        </Box>
                        <Box>
                            <Typography varient="p">{e.city}</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Button variant="contained">

                            <Link to="/enrollMeetup">
                                Enroll Now
                            </Link>

                        </Button>
                    </Box>


                </Box>






            </div>



        </div>
    )
}
