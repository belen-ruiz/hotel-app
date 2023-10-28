import { useEffect, useState } from "react";
import { Container, Box, Button } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { useRoomContext } from "../../../context/RoomProvider";
import { Stack } from "@mui/material";
import { Titles } from "../../titles/Titles";



export const SearchForRoom = ({}) => {
    const {
        adults,
        kids,
        handleChangeDate,
        handleSliderChange,
        handleInputChange,
        handleBlur,
        handleClick,
    } = useRoomContext(); 

    const topText = "Make your reservation"
    const title = "Search for Rooms"
    const subtitle = "Enjoy all benefits while you stay"

    return (
        <Container className="section a-center white-bc p-lg">
            <Stack spacing={2}  className="section a-center container-web">
                {/* titles */}
                <Titles 
                    topText={topText} 
                    title={title} 
                    subtitle={subtitle}/>

                {/* searchbar */}
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
