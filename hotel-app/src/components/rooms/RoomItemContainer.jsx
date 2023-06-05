import { Stack } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import { useRoomContext } from "../../context/RoomProvider";
import { RoomItem } from "./RoomItem";

export const RoomItemContainer = ({}) => {
    const { rooms, isList, setIsList } = useRoomContext();

    return (
        <Container
            sx={{
                overflowX: "scroll",
                padding: "1rem 0",
                // height: "100vh",
            }}
        >
            <Box
                sx={{
                    // height: "fit-content",
                    margin: "2rem",
                    display: "flex",
                    gap: "1.5rem",

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
    );
};
