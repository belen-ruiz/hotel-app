import { BoyRounded } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import { confort } from "../../utils/confort";

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
                        {confort && amenities &&
                            confort.map((service) => {
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


