
import React from "react";
import { Star } from "@mui/icons-material";
import { StarBorder } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { amenity } from "../../utils/hotelData";
import { RoomAmenities, RoomCapacity, RoomDescription, RoomImage, RoomPrice, RoomTitle } from "../rooms/RoomData";
import { Divider } from "@mui/material";
import { BtnContained, BtnOutlined } from "../buttons/Buttons";

const Review = () => {
    return (
        <Box className="j-start green" >
            <Star />
            <Star />
            <Star />
            <Star />
            <StarBorder/>
            <div className="block-font underline"> 9 Reviews</div>
        </Box>
    )
}
 

export const RoomDetail = ({ room }) => {
    const { id, title, capacity, amenities, description, price, imgUrl } = room;
    
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
                    <Box className="amenities" >
                        <RoomAmenities amenities={amenities} amenity={amenity} displayText={true}/>
                    </Box>
                        
                    {/* descrip */}
                    <RoomDescription description={description}/>
                </Stack>    

                <Divider orientation="vertical" flexItem />

                {/* price & book */}
                <Stack className="btn-box">
                    <RoomPrice price={price} title={title} />
                    
                    <BtnContained link="book-now" text="book now"/>
                </Stack>                               
             </Box>
             
           </> 
    );
};
