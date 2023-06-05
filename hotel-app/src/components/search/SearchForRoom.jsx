import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { Container, Box, Button } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { useRoomContext } from "../../context/RoomProvider";

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
        <Container sx={{ paddingTop: "2rem" }}>
            <SearchBar 
            handleChangeDate={handleChangeDate}
              handleSliderChange={handleSliderChange}
              handleInputChange={handleInputChange}              
              handleBlur={handleBlur}
              handleClick={handleClick}
              kids={kids}
              adults={adults}
              
              />
        </Container>
    );
};



