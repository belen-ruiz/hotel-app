import { Container, Stack, Box } from "@mui/material";
import React, { useRef, useState } from "react";
import { alignStart, alignCenter } from "../../../custom/Display";
import { ScrollContainer } from "./ScrollContainer";

import {
    White,
    WhiteBC,
    GreenBC,
    OrangeBC,
    TopText,
    Title,
    Subtitle,
    TextAlignJustify,
} from "../../../custom/Typography";


export const RoomDisplayContainer = ({}) => {

    return (
        <Container className="section alignStart green-bc">
                <Box className="section alignStart"
                    sx={{ 
                        flexDirection: { xs: "column", md: "row" },
                        padding: "2rem 0"
                    }}>
                    {/* titles */}
                    <Stack spacing={1} sx={{ width: { xs: "100%", md: "30%" } }}>
                        <p  className="topText"
                            style={{
                                textAlign: { xs: "center", md: "justify" },
                            }}
                        >
                            Discover our rooms
                        </p>
                        <p className="title white"
                            style={{
                                textAlign: { xs: "center", md: "justify" },
                            }}
                        >
                            Choose your room
                        </p>
                        <p className="subtitle white"
                            style={{
                               
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
                        <ScrollContainer />
                    </Stack>
                </Box>
            </Container>
    );
};
