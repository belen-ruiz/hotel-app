import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { Container, Box, Button } from "@mui/material";
import { GuestsSelect } from "./GuestsSelect";
import { SearchBar } from "./SearchBar";
import { useRoomContext } from "../../context/RoomProvider";

export const SearchForRoom = ({  }) => {
  const { 
    adults,
    setAdults,
    kids,
    setKids,
      startDate, setStartDate, endDate,setEndDate
   } = useRoomContext()


    const handleAdultSliderChange = (e, value) => {
        setAdults(value);
    };

    const handleAdultInputChange = (e) => {
        setAdults(e.target.value === "" ? "" : Number(e.target.value));
    };

    const handleAdultBlur = () => {
        if (adults < 0) {
            setAdults(0);
        } else if (setAdults > 5) {
            setAdults(5);
        }
    };

    const handleKidsSliderChange = (e, value) => {
        setKids(value);
    };

    const handleKidsInputChange = (event) => {
        setKids(event.target.value === "" ? "" : Number(event.target.value));
    };

    const handleKidsBlur = () => {
        if (kids < 0) {
            setKids(0);
        } else if (kids > 5) {
            setKids(5);
        }
    };


    return (
        <Container sx={{ paddingTop: "2rem" }}>
            <SearchBar 
              handleAdultSliderChange={handleAdultSliderChange}
              handleAdultInputChange={handleAdultInputChange}              
              handleAdultBlur={handleAdultBlur}
              handleKidsSliderChange={handleKidsSliderChange} 
              handleKidsInputChange={handleKidsInputChange} 
              handleKidsBlur={handleKidsBlur}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              />
        </Container>
    );
};



