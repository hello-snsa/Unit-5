import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function MeetupCard({ keyId, e }) {
    return (
        <div>

            <div>
                <Box>
                    <img src="defaultImage" alt="meetImage" />
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


                </Box>






            </div>



        </div>
    )
}
