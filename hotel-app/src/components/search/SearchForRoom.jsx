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



    const [guests, setGuests] = useState()

    const handleSliderChange = (e, value) => {
        const id = e.target.id
        if (id === "adults") {
            setAdults(value);
        } else if (id === "kids"){
            setKids(value);
        }
    };

    const handleInputChange = (e) => {
        const id = e.target.id
        if (id === "adults") {
            setAdults(e.target.value === "" ? "" : Number(e.target.value));
        } else if (id === "kids"){
            setKids(e.target.value === "" ? "" : Number(e.target.value));
        }

    };

    const handleBlur = (e) => {
        const id = e.target.id
        if (id === "adults") {
            if (adults < 0) {
                setAdults(0);
            } else if (adults > 5) {
                setAdults(5);
            }           
        } else if (id === "kids"){
            if (kids < 0) {
                setKids(0);
            } else if (kids > 5) {
                setKids(5);
            }
        }
    };


    return (
        <Container sx={{ paddingTop: "2rem" }}>
            <SearchBar 
              handleSliderChange={handleSliderChange}
              handleInputChange={handleInputChange}              
              handleBlur={handleBlur}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              />
        </Container>
    );
};



