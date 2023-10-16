import { Box, Stack } from "@mui/material";
import React from "react";
import { useRoomContext } from "../context/RoomProvider";
import AspectRatio from "@mui/joy/AspectRatio";
import { RoomDetailContainer } from "../components/rooms/RoomDetailContainer";
import { Pages } from "../custom/Display";
import { Container } from "@mui/material";

export const RoomDetails = () => {
    return (
        <Container sx={{ Pages }}>
            <RoomDetailContainer />
        </Container>
    );
};
