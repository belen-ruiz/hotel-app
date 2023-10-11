import React from "react";

import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Favorite from "@mui/icons-material/Favorite";
import CreateNewFolder from "@mui/icons-material/CreateNewFolder";
import { BoyRounded } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { OutlinedButton } from "../../custom/buttons/CustomButton";
import { SmallText,  } from "../../custom/typography/Typography"


export const RoomItem = ({ rooms }) => {
    const title = rooms.title;
    const capacity = rooms.capacity;
    const amenities = rooms.amenities;
    const allows = rooms.allows;
    const donts = rooms.donts;
    const description = rooms.description;
    const price = rooms.price;
    const imgUrl = rooms.imgUrl;

    return (
        <Card
            sx={{
                width: 300,
                "--Card-padding": "0px"}}>
            <AspectRatio ratio="3/4" sx={{borderRadius: 0}} >
                <figure>
                    <img src={imgUrl} loading="lazy" alt={title} />
                </figure>
            </AspectRatio>

            <CardCover
                className="gradient-cover"
                sx={{
                    "&:hover, &:focus-within": {opacity: 1},
                    display: "flex",
                    opacity: 0,
                    transition: "0.2s ease-in",
                    background: "linear-gradient(0deg, #222223d5 0%, #46474734 100%);",
                    height: "100%",
                    }}>
                    {/* The first box acts as a container that inherits style from the CardCover */}
                    <Stack spacing={1}
                        sx={{
                            display: "flex",
                            height: "100%",                            
                            padding: "1rem",
                            display: "flex",
                            justifyContent: "space-between",

                            }}>
                            
                            {/* capacidad */}
                            {capacity && (
                            <Box sx={{
                                        border: "1px solid white",
                                        borderRadius: 0,
                                        display: "flex",
                                    }}>
                                        {Array(capacity)
                                            .fill()
                                            .map((_, index) => (
                                                <BoyRounded
                                                    key={capacity}
                                                    style={{
                                                        color: "var(--color-white)",
                                                        fontSize: "2rem",
                                                    }}
                                                />
                                            ))}
                            </Box>)}
                                
                            {/* data */}
                            <Stack>
                                <p style={ SmallText }>{title}</p>

                                <p className="title secondary-light">
                                    $ {price}
                                </p>

                                <p className="parraph secondary-light">
                                    person per night
                                </p>

                                <Box sx={{}}>
                                    <Favorite />

                                    <Link to={`/room/${title}`}>
                                    <Box sx={OutlinedButton}>
see more info                    </Box>                                    </Link>
                                </Box>
                            </Stack>
                        </Stack>
            </CardCover>
        </Card>
    );
};
