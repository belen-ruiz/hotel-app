import { BoyRounded } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import { amenities as allAmenities } from "../../utils/amenities";

export const RoomDetail = ({ roooms }) => {
    const title = roooms.title;
    const capacity = roooms.capacity;
    const amenities = roooms.amenities;
    const allows = roooms.allows;
    const donts = roooms.donts;
    const description = roooms.description;
    const price = roooms.price;
    const imgUrl = roooms.imgUrl;

    return (
        <Box sx={{display: "flex", gap: "2rem"}}>
            <Box>
                <img src={imgUrl} alt="" />
            </Box>

            <Stack>
                <Typography>{title}</Typography>

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
                    <Box>
                        {allAmenities &&
                            allAmenities.map((service) => {
                                if (amenities.includes(service.name)) {
                                    return (
                                        <div key={service.name}>
                                            {service.icon} - {service.name}
                                        </div>
                                    );
                                }
                            })}
                    </Box>
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

                <Box sx={{paddingTop: "1rem"}}>
                    <Typography variant="subtitle2" >Description</Typography>
                    <Typography>{description}</Typography>
                </Box>
            </Stack>
        </Box>
    );
};
