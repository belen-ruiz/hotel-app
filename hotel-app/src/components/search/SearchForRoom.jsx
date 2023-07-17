import { useEffect, useState } from "react";
import { Container, Box, Button } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { useRoomContext } from "../../context/RoomProvider";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";

export const SearchForRoom = ({  }) => {
  const { 
    adults,
    kids,
    handleChangeDate, 
    handleSliderChange,
    handleInputChange, 
    handleBlur, 
    handleClick

   } = useRoomContext()


    return (
        <Container sx={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center" }}>
            <Stack sx={{ display: "flex", alignItems: "center", gap: "2rem"}}>
              <p className="subtitle">
                  Make your reservation
              </p>

              <p className="title">
                  Reservations
              </p>

              <SearchBar 
                handleChangeDate={handleChangeDate}
                handleSliderChange={handleSliderChange}
                handleInputChange={handleInputChange}              
                handleBlur={handleBlur}
                handleClick={handleClick}
                kids={kids}
                adults={adults}
                
                />
            </Stack>
        </Container>
    );
};



