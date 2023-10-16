import { Stack } from "@mui/material";
import { Container, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import { useRoomContext } from "../../context/RoomProvider";
import { RoomItem } from "./RoomItem";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import { Sections } from "../../custom/Display";

import {
    White, WhiteBC, GreenBC,
    TopText,
    Title,
    Subtitle,
    TextAlignJustify, 
} from "../../custom/Typography";

import {
    WhiteButton,
} from "../../custom/Buttons";


export const RoomItemContainer = ({}) => {
    const { rooms, isList, setIsList, handleScroll, containerRef } = useRoomContext();
    

    return (
        <Container
            disableGutters
            maxWidth="lg"
            sx={{ ...Sections, ...GreenBC }}
        >
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    gap: "1rem",
                }}
            >
                {/* titles */}
                <Stack spacing={1} sx={{ width: "30%" }}>
                    <p style={{ ...TopText, ...WhiteBC }}> Discover our rooms </p>
                    <p style={{...Title, ...White}}> Choose your room </p>
                    <p style={{...Subtitle, ...White, ...TextAlignJustify}}>
                        the Best place to enjoy life place to enjoy life place
                        to enjoy life place to enjoy.
                    </p>
                </Stack>

                {/* scroll container */}
                <Stack
                    sx={{
                        display: "flex",
                        width: "70%",
                        alignItems: "center",
                        gap: "1rem",                    
                        //position: "relative",
                    }}
                >
                    {/* scroll */}
                    <Container
                        ref={containerRef}
                        sx={{
                            overflowX: "scroll",
                            scrollBehavior: "smooth",
                            scrollSnapType: "x mandatory",
                            scrollbarWidth: "none",
                            padding: { xs: 0, md: 0, lg: 0 },  
                            //height: "100%",
                            //maxHeight: "70vh",
                            //position: "relative",
                        }}
                    >
                        {/* item list container */}
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                gap: "1rem",
                                //height: "70vh",
                                //minHeight: "60vh",
                                position: "relative",
                            }}
                        >
                            {/* item */}
                            {rooms &&
                                rooms.map((room) => (
                                    <Box
                                        sx={{
                                            width: "100%",
                                            display: "flex",
                                            gap: "1rem",
                                            //height: "70vh",
                                            //minHeight: "60vh",
                                            //position: "relative",
                                        }}
                                        key={rooms.title}
                                    >
                                        {room && (
                                            <RoomItem
                                                isList={isList}
                                                setIsList={setIsList}
                                                rooms={room}
                                            />
                                        )}
                                    </Box>
                                ))}
                        </Box>
                    </Container>

                    {/* buttons */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: "1rem",
                            //position: "absolute",
                            width: "35px",
                            height: "35px",
                            //top: "45%",
                            //left: "0",
                            //justifyContent: "space-between",
                            //right: "8rem",
                            zIndex: 222,
                            //transform: "translateY(-50%)",
                        }}
                    >
                        <Box
                            sx={{
                                ...WhiteButton
                            }}
                            onClick={() => handleScroll("left")}
                        >
                            <ArrowCircleLeftRoundedIcon fontSize="large" />
                        </Box>

                        <Box
                            sx={{ ...WhiteButton }}
                            onClick={() => handleScroll("right")}
                        >
                            <ArrowCircleRightRoundedIcon fontSize="large" />
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </Container>
    );
};
