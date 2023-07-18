import { useEffect, useState } from "react";
import { Container, Box, Button } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { useRoomContext } from "../../context/RoomProvider";
import { Typography } from "@mui/material";
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

    const imgURL =
        "https://images.pexels.com/photos/3601421/pexels-photo-3601421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    return (
        <Container
            sx={{
                display: "flex",
                height: "80vh",

                position: "relative",
            }}
        >
            <Box
                sx={{
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    width: "100%",
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
                    <p className="subtitle secondary">Make your reservation</p>

                    <p className="title primary">Reservations</p>

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
