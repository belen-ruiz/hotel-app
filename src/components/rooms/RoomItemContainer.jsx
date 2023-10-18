import { Stack } from "@mui/material";
import { Container, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import { useRoomContext } from "../../context/RoomProvider";
import { RoomItem } from "./RoomItem";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import { alignStart, alignCenter } from "../../custom/Display";

import {
    White,
    WhiteBC,
    GreenBC,
    OrangeBC,
    TopText,
    Title,
    Subtitle,
    TextAlignJustify,
} from "../../custom/Typography";

import { WhiteButton } from "../../custom/Buttons";

export const RoomItemContainer = ({}) => {
    const { rooms, isList, setIsList, handleScroll, containerRef } =
        useRoomContext();

    return (
        <Container sx={{ ...alignStart, ...GreenBC }}>
            <Box
                sx={{
                    ...alignStart,
                    flexDirection: { xs: "column", md: "row" },
                    padding: "2rem 0"
                }}>
                {/* titles */}
                <Stack spacing={1} sx={{ width: { xs: "100%", md: "30%" } }}>
                    <p
                        style={{
                            ...TopText,
                            textAlign: { xs: "center", md: "justify" },
                        }}
                    >
                        Discover our rooms
                    </p>
                    <p
                        style={{
                            ...Title,
                            ...White,
                            textAlign: { xs: "center", md: "justify" },
                        }}
                    >
                        Choose your room
                    </p>
                    <p
                        style={{
                            ...Subtitle,
                            ...White,
                            textAlign: "justify",
                        }}
                    >
                        the Best place to enjoy life place to enjoy life place
                        to enjoy life place to enjoy.
                    </p>
                </Stack>

                {/* scroll container */}
                <Stack
                    sx={{
                        display: "flex",
                        width: { xs: "100%", md: "70%" },
                        alignItems: "center",
                        gap: "1rem",
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
                            width: "35px",
                            height: "35px",
                            zIndex: 222,
                        }}
                    >
                        <Box
                            sx={{
                                ...WhiteButton,
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
