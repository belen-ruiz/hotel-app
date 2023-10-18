import { useEffect, useState } from "react";
import { Container, Box, Button } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { useRoomContext } from "../../context/RoomProvider";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";

import { alignCenter } from "../../custom/Display";

import {
    White,
    WhiteBC,
    Green,
    GreenBC,
    OrangeBC,
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
        <Container sx={{ ...alignCenter, ...WhiteBC }}>
            <Stack spacing={4} sx={{ ...alignCenter, padding: "4rem 0" }}>
                {/* titles */}
                <Stack
                    spacing={1}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <p style={{ ...TopText }}>Make your reservation</p>

                    <p style={{ ...Title, ...Green }}>Reservations</p>

                    <p style={{ ...Subtitle, ...Green }}>
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
