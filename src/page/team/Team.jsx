import { DataGrid} from '@mui/x-data-grid';
import React from 'react'
import { rows } from './Data';
import { Box, Typography, useTheme } from '@mui/material';




const Team = () => {
  const theme = useTheme()



  const columns = [
    { field: 'id', headerName: 'ID', width: 33, align: "center", headerAlign: "center" },
    { field: 'name', headerName: 'Name', flex: 1, align: "center", headerAlign: "center" },
    { field: 'email', headerName: 'Email', flex: 1, align: "center", headerAlign: "center" },
    { field: 'age', headerName: 'Age', flex: 1, align: "center", headerAlign: "center" },
    { field: 'phone', headerName: 'Phone', flex: 1, align: "center", headerAlign: "center" },
    { field: 'access', headerName: 'Access', flex: 1, align: "center", headerAlign: "center",
      renderCell: ({row: {access}}) => {
        return (
          <Box sx={{
            p: "5px",
            width: "99px",
            borderRadius: "5px",
            textAlign: "center",
            backgroundColor: theme.palette.primary.dark
          }}>
            <Typography>{access}</Typography>
          </Box>
        )
      }
    },
  ];


  
  return (
    <div style={{ height: 650, width: '100%' }}>
      <DataGrid rows={rows} 
// @ts-ignore
      columns={columns} />
    </div>
  )
}

export default Team
