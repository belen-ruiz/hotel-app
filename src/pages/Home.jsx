import { Container } from "@mui/material";
import React, { useState } from "react";
import { SearchForRoom } from "../components/sections/search/SearchForRoom";
import { Features } from "../components/sections/features/Features";
import { Testimonials } from "../components/sections/testimonials/Testimonials";
import { AboutUs } from "../components/sections/about/AboutUs";
import { RoomDisplayContainer } from "../components/sections/roomdisplay/RoomDisplayContainer";
import { Intro } from "../components/sections/intro/Intro";
import { Stack } from "@mui/material";


export const Home = () => {

    return (
        <Container className="mainSections p-0" >
            <Stack className="a-center">
                <Intro />

                <SearchForRoom />

                <RoomDisplayContainer />

                <Features /> 

                <AboutUs />

                <Testimonials />
            </Stack>
        </Container>
    );
};
