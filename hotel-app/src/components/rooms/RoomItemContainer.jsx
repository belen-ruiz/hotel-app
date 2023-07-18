import { Stack } from "@mui/material";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import { useRoomContext } from "../../context/RoomProvider";
import { RoomItem } from "./RoomItem";

export const RoomItemContainer = ({}) => {
    const { rooms, isList, setIsList } = useRoomContext();

    return (
        <Container
            sx={{
                display: "flex",
                height: "80vh",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Container sx={{}}>
                <Box sx={{ display: "flex" }}>
                    <Stack
                        sx={{
                            gap: 4,
                        }}
                    >
                        <p className="subtitle secondary"> Discover our rooms </p>
                        <p className="title primary"> Choose your room </p>
                    </Stack>

                    {/* scroll */}
                    <Container
                        sx={{
                            overflowX: "auto",
                            height: "85%",
                            maxHeight: "70vh",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                gap: "1.5rem",
                                minHeight: "60vh",
                            }}
                        >
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
            </Container>
        </Container>
    );
};
