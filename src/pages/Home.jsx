import { Container } from "@mui/material";
import React, { useState } from "react";
import { SearchForRoom } from "../components/sections/search/SearchForRoom";
import { Features } from "../components/sections/features/Features";
import { Testimonials } from "../components/sections/testimonials/Testimonials";
import { AboutUs } from "../components/sections/about/AboutUs";
import { RoomDisplayContainer } from "../components/sections/roomdisplay/RoomDisplayContainer";
import { useRoomContext } from "../context/RoomProvider";
import { Intro } from "../components/header/Intro";
import { MainSections } from "../custom/Display";
import { Stack } from "@mui/material";


export const Home = () => {

    return (
        <Container sx={{ ...MainSections }}>
            <Stack spacing={6} sx={{ width: "100%" }}>
                <Intro />

                <Features /> 

                <RoomDisplayContainer />

                <SearchForRoom />

                <AboutUs />

                <Testimonials />
            </Stack>
        </Container>
    );
};
