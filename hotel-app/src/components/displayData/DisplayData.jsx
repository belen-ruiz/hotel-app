import { Button } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import React from 'react';
import { FilterIcons } from "../../filter/FilterIcons";

export const DisplayData = ({ getAllRooms, totalGuests, setSelect, select }) => {
  return (
    <Box sx={{display: "flex", justifyContent:"space-between", alignItems:"center" }}>

        {totalGuests === 0 ? (
        <Typography variant="subtitle2">
                Showing results for all Rooms 
        </Typography>
        ):(
        <Box sx={{display: "flex", alignItems:"center"}}>
            <Typography variant="subtitle2">
                Showing results for Rooms for {totalGuests}
                      people /
            </Typography>
            <Button onClick={getAllRooms}>
                Show all
            </Button>                
        </Box>
        )
        }

        <FilterIcons setSelect={setSelect} select={select} />
    </Box>
  )
}
