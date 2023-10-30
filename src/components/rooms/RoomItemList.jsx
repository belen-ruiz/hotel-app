import React, { useState } from "react";
import Card from "@mui/joy/Card";
import { Stack, Box } from "@mui/material";
import { amenity } from "../../utils/hotelData";

import Divider from "@mui/joy/Divider";

import { RoomCapacity, RoomImage, RoomDescription, RoomPrice, RoomTitle, RoomAmenities, GroupButtons } from "./RoomData";

export const RoomItemList = ({ rooms, isList }) => {
    const { id, title, capacity, amenities, description, price, imgUrl } = rooms;

       return (
        <Card className={`item-card white-bc ${isList && 'isList'}`}>
            <Box className={`item-box ${isList && 'isList'}`} >
                {/* image */}
                <Box sx={{ flex: 1, height: "100%", width: "100%" }}>
                    <RoomImage imgUrl={imgUrl} title={title} ratio="3/5" />
                </Box> 

                {/* data */}
                <Stack className="item-data" >
                    {/* title */}
                    <RoomTitle title={title} />

                    {/* capacity & amenities */}
                    <Box className="item-databox" >
                        
                        <RoomCapacity capacity={capacity} />

                        <Divider orientation="vertical" flexItem />

                        <RoomAmenities amenities={amenities} amenity={amenity} displayText={false} />
                        
                        
                    </Box>

                    {/* descrip */}
                    <RoomDescription description={description}/>
                </Stack>


                {isList ? 
                <Divider orientation="vertical" flexItem />
                :
                <Divider flexItem />
                }

                {/* price & book */}
                <Stack className="btn-box">
                    <RoomPrice price={price} title={title} />
                    <GroupButtons id={id}/>
                </Stack>
            </Box>
        </Card>
    );
};
