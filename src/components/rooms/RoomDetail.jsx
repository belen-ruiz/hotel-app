
import React from "react";
import { Star } from "@mui/icons-material";
import { StarBorder } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { amenity } from "../../utils/amenity";
import { GroupButtons, RoomAmenities, RoomCapacity, RoomDescription, RoomImage, RoomPrice, RoomTitle } from "./RoomData";
import { Divider } from "@mui/material";
import { BtnOutlined } from "../buttons/Buttons";

const Review = () => {
    return (
        <Box className="j-start green" >
            <Star />
            <Star />
            <Star />
            <Star />
            <StarBorder/>
            <p className="menuWeb" > 9 Reviews</p>
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
             <Box className="white-bc detail-box">

                {/* image */}
                <Box sx={{ flex: 1, height: "100%" }}>
                    <RoomImage imgUrl={imgUrl} title={title} ratio="3/5" />
                </Box>   

                 {/* data */}
                <Stack
                spacing={2}
                    sx={{
                        display: "flex",
                        flex: 2,
                        height: "100%"
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
                        
                    }}
                >
                    <RoomPrice price={price} title={title} />
                    
                    <BtnOutlined link="book-now" text="book now"/>
                </Stack>                               
             </Box>
             
           </>
    );
};

