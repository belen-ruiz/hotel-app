import { Container } from "@mui/material";
import React, { useState } from "react";
import { SearchForRoom } from "../components/search/SearchForRoom";
import { Features } from "../components/features/Features";
import { Testimonials } from "../components/testimonials/Testimonials";
import { AboutUs } from "../components/about/AboutUs";
import { Map } from "../components/map/Map";
import { RoomItemContainer } from "../components/rooms/RoomItemContainer";
import { useRoomContext } from "../context/RoomProvider";
import { Intro } from "../components/header/Intro";


export const Home = () => {
    const { rooms, search } = useRoomContext();

    return (
        <Container
            sx={{
                width: "100vw",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4rem",
                padding: { xs: 0, md: 0, lg: 0 },                
                margin: { xs: 0, md: 0, lg: 0 },                
            }}>

            <Intro />

            <Features />

            <RoomItemContainer rooms={rooms} />

            <SearchForRoom search={search} />
            
            <AboutUs />

            <Testimonials />

        </Container>
    );
};
