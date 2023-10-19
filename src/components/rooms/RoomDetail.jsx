
import { Star } from "@mui/icons-material";
import { StarBorder } from "@mui/icons-material";
import { BoyRounded } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import { comfort } from "../../utils/comfort";
import { GroupButtons, RoomAmenities, RoomAmenitiesText, RoomCapacity, RoomDescription, RoomImage, RoomPrice, RoomTitle } from "./RoomItem";
import {
    White,
    WhiteBC,
    GreenBC,
    OrangeBC,
    Green,
    TopText,
    Title,
    Subtitle,
    CardTitle,
    Price,
    TextAlignJustify,
} from "../../custom/Typography";

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

                    {/* capacity */}
                    <RoomCapacity capacity={capacity} />

                    {/* amenities */}
                    <RoomAmenities amenities={amenities} comfort={comfort} displayText={true}/>
                    {/* <RoomAmenities amenities={amenities} comfort={comfort} /> */}
                        
                    {/* descrip */}
                    <RoomDescription description={description}/>
                </Stack>    

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
                    <GroupButtons title={title}/>
                </Stack>       
                 
                        
             </Box>
             
           </>
    );
};


{/* 
            //  <Box sx={{paddingTop: "1rem"}}>
            //          <Typography variant="subtitle2" >Description</Typography>
            //          <Typography>{description}</Typography>
            //  </Box> */}