import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';


const data = [
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'Manager',
    label: 'Manager',
  },
  {
    value: 'User',
    label: 'User',
  }
];

const Form = () => {
  return (
    <Box
      component="form"
      // sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
    <Stack direction={"row"}>
      <TextField  label="First Name" variant="filled" sx={{flex: 1, mr: "15px"}}  />
      <TextField  label="Last Name" variant="filled" sx={{flex: 1, mr: "15px"}} />
    </Stack>

      <TextField  label="Email" variant="filled" />
      <TextField  label="Contact Number" variant="filled" />
      <TextField  label="Adress 1" variant="filled" />
      <TextField  label="Adress 2" variant="filled" />

      <TextField
          variant="filled"
          select
          label="Role"
          defaultValue="User"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </Box>
  )
}

export default Form

