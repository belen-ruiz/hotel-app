// import { Container, Stack, Box, Typography } from "@mui/material";
// import { useRoomContext } from "../../context/RoomProvider";
// import { RoomItemList } from "./RoomItemList";
// import { alignCenter } from "../../custom/Display";

// export const RoomItemListContainer = ({}) => {
//     const { rooms, isList, setIsList, search } = useRoomContext();

//     return (
//         <Container
//             sx={{
//                 ...alignCenter,
//                 gap: "4rem",
//                 flexDirection: isList ? "column" : "row",
//                 flexWrap: !isList && "wrap",
//             }}
//         >
//             {search.length > 0
//                 ? search.map((room, index) => (
//                       <Box key={index}>
//                           {room && (
//                               <RoomItemList
//                                   isList={isList}
//                                   setIsList={setIsList}
//                                   rooms={room}
//                               />
//                           )}
//                       </Box>
//                   ))
//                 : rooms &&
//                   rooms.map((room, index) => (
//                       <Box key={index}>
//                           {room && (
//                               <RoomItemList
//                                   isList={isList}
//                                   setIsList={setIsList}
//                                   rooms={room}
//                               />
//                           )}
//                       </Box>
//             ))}
//         </Container>
//     );
// };


import React from "react";
import { Container, Box } from "@mui/material";
import { useRoomContext } from "../../context/RoomProvider";
import { RoomItemList } from "./RoomItemList";
import { alignCenter } from "../../custom/Display";

export const RoomItemListContainer = () => {
  const { rooms, isList, setIsList, search } = useRoomContext();

  const renderRooms = (roomList) =>
    roomList.map((room, index) => (
      <Box key={index}>
        {room && <RoomItemList isList={isList} setIsList={setIsList} rooms={room} />}
      </Box>
    ));

  return (
    <Container
      sx={{
        ...alignCenter,
        gap: "4rem",
        flexDirection: isList ? "column" : "row",
        flexWrap: !isList && "wrap",
      }}
    >
      {search.length > 0 ? renderRooms(search) : renderRooms(rooms)}
    </Container>
  );
};

