import { useEffect, useState } from "react";
import { Container, Box, Button } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { useRoomContext } from "../../context/RoomProvider";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { TopText, Title, SubtitleCenter } from "../../custom/typography/Typography"


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

    const imgURL =
        "https://images.pexels.com/photos/3601421/pexels-photo-3601421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    return (
        <Container
        sx={{
            display: "flex",
            height: "80vh",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",

        }}
        >
            <Box
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    width: "80%",
                    height: "100%",
                    backgroundImage: `url(${imgURL})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Stack
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2rem",
                        height: "100%",
                        justifyContent: "center",
                    }}
                >
                    <Stack spacing={1} sx={{
                    display: "flex",
                    alignItems: "center",
                }}>
                        <p style={ TopText } >Make your reservation</p>
                        
                        <p style={ Title }>Reservations</p>
                        
                        <p style={ SubtitleCenter }>Enjoy all benefits while you stay</p>
                    </Stack>

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
            </Box>
        </Container>
    );
};
