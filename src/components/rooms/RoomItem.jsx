import React from "react";
import { Stack, Box } from "@mui/material";
import { GroupButtons, RoomCapacity, RoomImage, RoomPrice, RoomTitle } from "./RoomData";

//home room item 
export const RoomItem = ({ rooms }) => {
    const id = rooms.id;
    const title = rooms.title;
    const capacity = rooms.capacity;
    const price = rooms.price;
    const imgUrl = rooms.imgUrl;

    return (
        <Box
            sx={{
                width: 300,
                position: "relative",
            }}
        >
            {/* img */}
            <RoomImage imgUrl={imgUrl} title={title} ratio="4/6" />

            {/* data */}
            <Stack className="room-item">
                {/* capacidad */}
                {capacity && <RoomCapacity capacity={capacity} />}

                {/* data */}
                <RoomTitle title={title} />
                <RoomPrice price={price} />

                {/* buttons */}
                <GroupButtons id={id} />
            </Stack>
        </Box>
    );
};

///
