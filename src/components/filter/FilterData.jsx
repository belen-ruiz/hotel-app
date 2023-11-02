
import React from "react";
import { Box } from "@mui/material";

export const FilterData = ({ getAllRooms, dataDisplay }) => {
  
  return (
          <Box className="d-flex j-start g-1">
            <Box className="data-btn" onClick={getAllRooms}>
              Show all Rooms
            </Box>
            <Box className="data-info">{dataDisplay}</Box>
          </Box>
          )
        
};
