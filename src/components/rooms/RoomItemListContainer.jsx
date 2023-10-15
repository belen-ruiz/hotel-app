import { Stack } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import { useRoomContext } from "../../context/RoomProvider";
import { RoomItemList } from "./RoomItemList";

export const RoomItemListContainer = ({}) => {
    const { rooms, isList, setIsList, search } = useRoomContext();

    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: isList ? "column" : "row",
                flexWrap: !isList && "wrap",
                width: "fit-content",
            }}
        >

            {
                search.length > 0 ? 
                    search.map((room, index) => (
                          <Box key={index}>
                              {room && (
                                        <RoomItemList
                                          isList={isList}
                                          setIsList={setIsList}
                                          rooms={room}
                                      />
                              )}
                          </Box>
                  ))
                : rooms &&
                    rooms.map((room, index) => (
                            <Box key={index}>
                                {room && (
                                    <RoomItemList
                                        isList={isList}
                                        setIsList={setIsList}
                                        rooms={room}
                                    />
                                )}
                            </Box>
                  ))}
        </Container>
    );
};
