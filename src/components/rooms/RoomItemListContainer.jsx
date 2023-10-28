import React from "react";
import { Container, Box } from "@mui/material";
import { useRoomContext } from "../../context/RoomProvider";
import { RoomItemList } from "./RoomItemList";

export const RoomItemListContainer = () => {
  const { rooms, isList, setIsList, search } = useRoomContext();

  const renderRooms = (roomList) =>
    roomList.map((room, index) => (
        room && <RoomItemList key={index}  isList={isList} setIsList={setIsList} rooms={room} />
      
    ));

  return (
    <Container className="section a-center">
      <Box className="itemlist-box" >
        {search.length > 0 ? renderRooms(search) : renderRooms(rooms)}        
      </Box>
    </Container>
  );
};

