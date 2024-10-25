import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const Row1 = () => {
  return (
    <Stack direction={"row"} sx={{display: "flex"}}>
        <Paper sx={{minWidth: "333px"}}>
            
            <Stack >
                icon
                <Typography>12,361</Typography>
                <Typography>Emails Sent</Typography>
            </Stack>

            <Stack></Stack>

        </Paper>
    </Stack>
  )
}

export default Row1
