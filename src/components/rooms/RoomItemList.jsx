import React, { useState } from "react";

import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import { Stack } from "@mui/material";
import { comfort } from "../../utils/comfort";

import Divider from "@mui/joy/Divider";
import { Container } from "@mui/material";
import {
    ContainedButton,
    OutlinedButton,
} from "../../custom/Buttons";
import { Green, WhiteBC } from "../../custom/Typography"
import { RoomCapacity, RoomImage, RoomDescription, RoomPrice, RoomTitle, RoomAmenities, GroupButtons, RoomAmenitiesIcon } from "./RoomItem";

export const RoomItemList = ({ rooms, isList, setIsList }) => {
    const title = rooms.title;
    const capacity = rooms.capacity;
    //const amenities = rooms.amenities;
    const amenities = rooms.amenities.slice(0, 4);
    const allows = rooms.allows;
    const donts = rooms.donts;
    const description = rooms.description;
    const price = rooms.price;
    const imgUrl = rooms.imgUrl;

   
    return (
        <Card
            sx={{
                ...WhiteBC,
                width: isList ? "fit-content" : "300px",
                height: "fit-content",
                maxHeight: "max-content",
                overflow: "hidden",
                borderRadius: 0,                
                "--Card-padding": "0px",
                transition: "all .4s ease-out",
                "&:hover": {
                    transform: "translateY(-5%)",
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    //justifyContent: "center",
                    flexDirection: isList ? "row" : "column",
                    alignItems: "space-between",
                    width: "100%",
                    height: "100%"
                }}
            >
                {/* image */}
                <Box sx={{ flex: 1, height: "100%" }}>
                    <RoomImage imgUrl={imgUrl} title={title} ratio="3/5" />
                </Box> 

                {/* data */}
                <Stack
                    sx={{
                        display: "flex",
                        gap: "0.5rem",
                        //width: "50%",
                        padding: "1rem",
                        justifySelf: "start",
                        flex: 2
                    }}
                >
                    {/* title */}
                    <RoomTitle title={title} />

                    {/* capacity & amenities */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: "0.5rem",
                            alignItems: "center",
                        }}
                    >
                        
                        <RoomCapacity capacity={capacity} />

                        <Divider orientation="vertical" flexItem />

                        <RoomAmenities amenities={amenities} comfort={comfort} displayText={false} />
                        
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
                <Stack
                    sx={{
                        display: "flex",
                        width: "100%",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        //alignItems: "start",
                        padding: "1rem",
                        flex: isList && 1,
                        //justifySelf: "end",
                        //gap: !isList && "1rem",
                    }}
                >
                    <RoomPrice price={price} title={title} />
                    <GroupButtons title={title}/>
                </Stack>
            </Box>
        </Card>
    );
};
