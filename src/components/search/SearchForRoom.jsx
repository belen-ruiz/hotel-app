import { useEffect, useState } from "react";
import { Container, Box, Button } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { useRoomContext } from "../../context/RoomProvider";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import {
    TopText,
    Title,
    SubtitleCenter,
} from "../../custom/typography/Typography";

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
        disableGutters
            maxWidth="md"
            sx={{
                display: "flex",
                //height: "80vh",
                justifyContent: "center",
                alignItems: "center",
                //position: "relative",
            }}
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
                    backgroundImage: `url(${imgURL})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    }}>

                    {/* titles */}
                    <Stack
                        spacing={1}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <p style={TopText}>Make your reservation</p>

                        <p style={Title}>Reservations</p>

                        <p style={SubtitleCenter}>
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
