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
    const allows = room.allows;
    const donts = room.donts;
    const description = room.description;
    const price = room.price;
    const imgUrl = room.imgUrl;

    return (
           <>
             <Box sx={{display: "flex", gap: "2rem"}}>
                 <Box>
                     <img src={imgUrl} alt="" style={{height: "500px"}}/>
                 </Box>
            
                 <Stack>
                     <Typography variant="h3">{title}</Typography>
            
                     <Review />
            
                     <Box sx={{paddingTop: "1rem"}}>
                         <Typography variant="subtitle2" >Capacity</Typography>
                         <Box>
                             {capacity && (
                                 <div>
                                     {Array(capacity)
                                         .fill()
                                         .map((_, index) => (
                                             <BoyRounded />
                                         ))}
                                 </div>
                             )}
                             
                         </Box>
                     </Box>
            
            
            
                     <Box sx={{paddingTop: "1rem"}}>
                         <Typography variant="subtitle2" >Amenities</Typography>
                         <Grid container spacing={2}  sx={{ justifyContent: "space-between" }}>
                             {comfort && amenities &&
                                 comfort.map((service) => {
                                     if (amenities.includes(service.name)) {
                                         return (
                                             <Grid item xs={4}
                                                 key={service.name}
                                                 sx={{display:"flex", gap:"0.6rem"}}>
                                                 <Box> {service.icon} </Box>
                                                 <Typography variant="subtitle2" sx={{textTransform:"capitalize"}}> {service.name}</Typography> 
                                             </Grid>
                                         );
                                     }
                                 })}
                         </Grid>
                     </Box>
            
                     
            
            
                     <Box sx={{paddingTop: "1rem"}}>
                         <Typography variant="subtitle2" > 
                         Includes
                         </Typography>
            
                         <Typography variant="subtitle2" > 
                         Doesnt Include
                         </Typography>
                     </Box>
            
            
            
                     <Box sx={{paddingTop: "1rem"}}>
                         <Typography variant="subtitle2" > ${price} per person per night</Typography>
                         <Button variant="contained" color="primary">
                             RESERVATION
                         </Button>
                     </Box>
            
                 </Stack>
            
             </Box>
             
             <Box sx={{paddingTop: "1rem"}}>
                     <Typography variant="subtitle2" >Description</Typography>
                     <Typography>{description}</Typography>
             </Box>
           </>
    );
};


