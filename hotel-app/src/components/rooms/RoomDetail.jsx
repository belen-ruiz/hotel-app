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
        <Box>
            <Box>
                <img src={imgUrl} alt="" />
            </Box>

            <Stack>
                <Box>
                    <Typography>Amenities</Typography>
                    <Box>
                        {allAmenities &&
                            allAmenities.map((service) => {
                                if (amenities.includes(service.name)) {
                                    return (
                                        <div key={service.name}>
                                            {service.icon}
                                        </div>
                                    );
                                }
                            })}
                    </Box>
                </Box>

                <Box>
                    <Typography> ${price}</Typography>
                    <Button variant="contained" color="primary">
                        RESERVATION
                    </Button>
                </Box>
                <Box>
                    <Typography>Description</Typography>
                    <Typography>{description}</Typography>
                </Box>
            </Stack>
        </Box>
    );
};
