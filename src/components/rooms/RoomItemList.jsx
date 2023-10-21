import React, { useState } from "react";

import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Card from "@mui/joy/Card";
import { Stack, Box } from "@mui/material";
import { amenity } from "../../utils/amenity";

import Divider from "@mui/joy/Divider";
import { Container } from "@mui/material";

import { RoomCapacity, RoomImage, RoomDescription, RoomPrice, RoomTitle, RoomAmenities, GroupButtons, RoomAmenitiesIcon } from "./Room";

export const RoomItemList = ({ rooms, isList }) => {
    const id = rooms.id;
    const title = rooms.title;
    const capacity = rooms.capacity;
    const amenities = rooms.amenities;
    //const amenities = rooms.amenities.slice(0, 4);
    const allows = rooms.allows;
    const donts = rooms.donts;
    const description = rooms.description;
    const price = rooms.price;
    const imgUrl = rooms.imgUrl;

   
    return (
        <Card className="item-card white-bc"
            sx={{ width: isList ? "fit-content" : "300px" }}>
            <Box className="item-box"
                sx={{ flexDirection: isList ? "row" : "column" }}
            >
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
                <Stack className="item-price" sx={{  flex: 1 }} >
                    <RoomPrice price={price} title={title} />
                    <GroupButtons id={id}/>
                </Stack>
            </Box>
        </Card>
    );
};
