import React, { useState } from "react";
import { Box } from "@mui/material";
import { FilterView } from "./FilterView";
import { FilterData } from "./FilterData";
import Order from "./Order";
import { useEffect } from "react";

export const Filter = ({ getAllRooms, totalGuests, setSelect, select, order, setOrder }) => {

  let dataDisplay = null;

  if (totalGuests > 0 && totalGuests <= 5) {
    dataDisplay = `Showing results for Rooms for ${totalGuests} people`;
  } else if (totalGuests > 5) {
    dataDisplay = `No rooms available for ${totalGuests} people`;
  } else {
    dataDisplay = `Showing results for all Rooms`;
  }


    // if (order == 1) {

    //   console.log(order)
    //     }
    //     else if(order == 2){
    //       console.log(order)
      
    //     }    


  return (
    <Box className="filters">
      <Order setOrder={setOrder}/>

      {dataDisplay && (
      <FilterData dataDisplay={dataDisplay} getAllRooms={getAllRooms} />
      )}


      <FilterView setSelect={setSelect} select={select} />
    </Box>
  );
};
