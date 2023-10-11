import { Stack } from "@mui/material";
import { Container, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import { useRoomContext } from "../../context/RoomProvider";
import { RoomItem } from "./RoomItem";
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

export const RoomItemContainer = ({}) => {
    const { rooms, isList, setIsList } = useRoomContext();

    return (
        <Container
            sx={{
                display: "flex",
                width: "100%",
                height: "80vh",
                justifyContent: "center",
                alignItems: "center",
                 }}>

            <Box sx={{ display: "flex", width: "100%" }}>
                <Stack spacing={1}
                    sx={{ width: "40%" }}>
                    <p className="subtitle secondary"> Discover our rooms </p>
                    <p className="title primary"> Choose your room </p>
                    <p className="parraph primary">
                                the Best place to enjoy life place to enjoy life place
                                to enjoy life place to enjoy.</p>
                </Stack>

                {/* scroll */}
                <Container
                    sx={{
                        overflowX: "scroll",
                        scrollBehavior: "smooth",
                        scrollSnapType: "x mandatory",
                        scrollbarWidth: "none",
                        height: "100%",
                        maxHeight: "70vh"}} >

                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            gap: "1rem",
                            height: "70vh",
                            minHeight: "60vh",
                            position: "relative"}}>


                        {/* buttons */}
                        <Box sx={{
                            width: "100%",
                            top: "50%",
                            display: "flex",
                            justifyContent: "space-between",
                            left: "1rem",
                            position: "absolute",
                            right: "8rem",
                            transform: "translateY(-50%)",
                            zIndex: 2000 }} > 
                        
                            <Box sx={{ color: 'white', }}>
                                <ArrowCircleLeftRoundedIcon fontSize="large"/> 
                            </Box>
                            <Box sx={{ color: 'white', }}>
                                <ArrowCircleRightRoundedIcon fontSize="large"/> 
                            </Box>

                        </Box>

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
                        </Box>))}
                    </Box>                   
                </Container>
            </Box>

        </Container>
    );
};
