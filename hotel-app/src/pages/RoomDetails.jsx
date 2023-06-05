import { Box, Stack } from "@mui/material";
import React from "react";
import { useRoomContext } from "../context/RoomProvider";
import AspectRatio from "@mui/joy/AspectRatio";
import { RoomDetailContainer } from "../components/rooms/RoomDetailContainer";
import { Hero } from "../components/hero/Hero";

export const RoomDetails = () => {
    return (
        <div>
            <Hero
                pageTitle="Rooms"
                imgUrl="https://images.pexels.com/photos/1571469/pexels-photo-1571469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />{" "}
            <RoomDetailContainer />
        </div>
    );
};
