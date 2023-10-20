
import { Star } from "@mui/icons-material";
import { StarBorder } from "@mui/icons-material";
import { BoyRounded } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import { amenity } from "../../utils/amenity";
import { GroupButtons, RoomAmenities, RoomAmenitiesText, RoomCapacity, RoomDescription, RoomImage, RoomPrice, RoomTitle } from "./RoomItem";
import { Divider } from "@mui/material";

const Review = () => {
    return (
        <Box sx={{display: "flex", alignItems: "center"}}>
            <Star />
            <Star />
            <Star />
            <Star />
            <StarBorder/>
            <Typography variant="subtitle2" > 9 Reviews</Typography>
        </Box>
    )
}


export const RoomDetail = ({ room }) => {
    const id = room.id;
    const title = room.title;
    const capacity = room.capacity;
    const amenities = room.amenities;
    const description = room.description;
    const price = room.price;
    const imgUrl = room.imgUrl;


    return (
           <>
             <Box sx={{display: "flex", gap: "2rem" }}>

                {/* image */}
                <Box sx={{ flex: 1, height: "100%" }}>
                    <RoomImage imgUrl={imgUrl} title={title} ratio="3/5" />
                </Box>   

                 {/* data */}
                <Stack
                spacing={2}
                    sx={{
                        display: "flex",
                        //width: "50%",
                        justifySelf: "start",
                        flex: 2
                    }}
                >
                    {/* title */}
                    <RoomTitle title={title} />

                    {/* review */}
                    <Review />

                    {/* capacity */}
                    <Box sx={{ display: "flex" }} >
                        <RoomCapacity capacity={capacity} />
                    </Box>

                    {/* amenities */}
                    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", width: "100%"  }} >
                        <RoomAmenities amenities={amenities} amenity={amenity} displayText={true}/>
                    </Box>
                        
                    {/* descrip */}
                    <RoomDescription description={description}/>
                </Stack>    

                <Divider orientation="vertical" flexItem />

                {/* price & book */}
                <Stack
                    sx={{
                        flex: 1,
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        //flexDirection: "column",
                        //alignItems: "start",
                        //padding: "1rem",
                        //justifySelf: "end",
                        //gap: !isList && "1rem",
                    }}
                >
                    <RoomPrice price={price} title={title} />
                    <GroupButtons id={id}/>
                </Stack>                               
             </Box>
             
           </>
    );
};

