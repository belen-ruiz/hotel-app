import { Stack } from "@mui/material";
import { Container, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import { useRoomContext } from "../../context/RoomProvider";
import { RoomItem } from "./RoomItem";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import { TopText, Title, SubtitleJustify } from "../../custom/typography/Typography"


export const RoomItemContainer = ({}) => {
    const { rooms, isList, setIsList } = useRoomContext();
    const containerRef = useRef(null);
    const container = containerRef.current;

    const handleScroll = (direction) => {
        if (container) {
            if (direction === "left") {
                container.scrollLeft -= 300;
            } else if (direction === "right") {
                container.scrollLeft += 300;
            }
        }
    };


    return (
        <Container
            sx={{
                display: "flex",
                width: "100%",
                height: "80vh",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: { xs: "0", md: "0", xl: "0" },
                paddingRight: { xs: "0", md: "0", xl: "0" },
            }}
        >
            <Box sx={{ display: "flex", width: "100%", gap: "1rem" }}>
                <Stack spacing={1} sx={{ width: "30%" }}>
                    <p style={ TopText } > Discover our rooms </p>
                    <p style={ Title }> Choose your room </p>
                    <p style={ SubtitleJustify }>
                        the Best place to enjoy life place to enjoy life place
                        to enjoy life place to enjoy.
                    </p>
                </Stack>

                <Box sx={{ display: "flex", width: "70%", position: "relative", paddingLeft: { xs: "0", md: "0", xl: "0" },
                paddingRight: { xs: "0", md: "0", xl: "0" }, }}>
                    {/* buttons */}
                    <Box
                        sx={{
                            position: "absolute",
                            width: "100%",
                            height: "35px",
                            top: "45%",
                            left: "0",
                            display: "flex",
                            justifyContent: "space-between",
                            //right: "8rem",
                            //transform: "translateY(-50%)",
                            zIndex: 2000,
                        }}
                    >
                        <Box
                            sx={{
                                    color: "green",
                                    cursor: "pointer",
                                    transition: "transform 0.3s ease",
                                    paddingLeft: { xs: "0", md: "0", xl: "0" },
                paddingRight: { xs: "0", md: "0", xl: "0" },
                                    "&:hover": {
                                        boxShadow:
                                            "2px 2px 4px rgba(0, 0, 0, 0.3)",
                                        borderRadius: "50%",
                                        transform: "scale(1.5)",
                                    },
                                }}
                            onClick={() => handleScroll("left")}>
                            <ArrowCircleLeftRoundedIcon fontSize="large" />
                        </Box>
                        
                        <Box
                            sx={{
                                color: "green",
                                cursor: "pointer",
                                transition: "transform 0.3s ease",

                                "&:hover": {
                                    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                                    borderRadius: "50%",
                                    transform: "scale(1.5)",
                                },
                            }}
                            onClick={() => handleScroll("right")}
                        >
                            <ArrowCircleRightRoundedIcon fontSize="large" />
                        </Box>
                    </Box>

                    {/* scroll */}
                    <Container
                        ref={containerRef}
                        sx={{
                            overflowX: "scroll",
                            scrollBehavior: "smooth",
                            scrollSnapType: "x mandatory",
                            scrollbarWidth: "none",
                            height: "100%",
                            maxHeight: "70vh",
                            position: "relative",
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                gap: "1rem",
                                height: "70vh",
                                minHeight: "60vh",
                                position: "relative",
                            }}
                        >
                            {/* room list */}
                            {rooms &&
                                rooms.map((room) => (
                                    <Box key={rooms.title}>
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
                </Box>
            </Box>
        </Container>
    );
};
