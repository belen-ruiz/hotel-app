import { useEffect, useState } from "react";
import { Container, Box, Button } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { useRoomContext } from "../../context/RoomProvider";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";

import { Sections } from "../../custom/Display";

import {
    White,
    WhiteBC,
    Green,
    GreenBC,
    TopText,
    Title,
    Subtitle,
} from "../../custom/Typography";

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
        <Container
            disableGutters
            maxWidth="lg"
            sx={{ ...Sections, ...WhiteBC }}
        >
                <Stack
                spacing={6}
                    sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    //position: "absolute",
                    padding: "2rem",
                    }}>

                    {/* titles */}
                    <Stack
                        spacing={1}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <p style={{ ...TopText, ...White, ...GreenBC }}>Make your reservation</p>

                        <p style={{...Title, ...Green}}>Reservations</p>

                        <p style={{...Subtitle, ...Green}}>
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
