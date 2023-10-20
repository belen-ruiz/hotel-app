import { useEffect, useState } from "react";
import { Container, Box, Button } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { useRoomContext } from "../../../context/RoomProvider";
import { Stack } from "@mui/material";


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

    return (
        <Container className="section alignCenter white-bc">
            <Stack spacing={4}  className="section alignCenter">
                {/* titles */}
                <Stack
                    spacing={1}
                    className="alignCenter"
                >
                    <p className="topText">Make your reservation</p>

                    <p className="title green">Reservations</p>

                    <p className="subtitle green">
                        Enjoy all benefits while you stay
                    </p>
                </Stack>

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
