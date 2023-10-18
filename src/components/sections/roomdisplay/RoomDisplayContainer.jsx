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
                    <ScrollContainer />
                </Stack>
            </Box>
        </Container>
    );
};
