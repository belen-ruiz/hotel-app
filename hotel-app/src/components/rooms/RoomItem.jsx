import React from "react";

import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Chip from "@mui/joy/Chip";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Favorite from "@mui/icons-material/Favorite";
import CreateNewFolder from "@mui/icons-material/CreateNewFolder";
import { BoyRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import { Link } from "react-router-dom";

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
        <Link to={`/room/${title}`}>
            <Card
                sx={{
                    width: 300,
                    bgcolor: "initial",
                    boxShadow: "none",
                    "--Card-padding": "0px",
                }}
            >
                <Box sx={{ height: "100%" }}>
                    <AspectRatio ratio="3/4">
                        <figure>
                            <img src={imgUrl} loading="lazy" alt={title} />
                        </figure>
                    </AspectRatio>

                    <CardCover
                        className="gradient-cover"
                        sx={{
                            "&:hover, &:focus-within": {
                                opacity: 1,
                            },
                            opacity: 0,
                            transition: "0.1s ease-in",
                            background:
                                "linear-gradient(0deg, #222223d5 0%, #46474734 100%); ",
                            padding: "1rem",
                        }}
                    >
                        {/* The first box acts as a container that inherits style from the CardCover */}
                        <Box
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.5rem"
                            }}
                        >
                            <p className="title-2 ">{title}</p>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem"}}>

                                <Box
                                    sx={{
                                        border: "1px solid white",
                                        borderRadius: "10px",
                                        display: "flex",
                                        margin: "auto"
                                    }}>
                                    {capacity && (
                                        <Box>
                                            {Array(capacity)
                                                .fill()
                                                .map((_, index) => (
                                                    <BoyRounded
                                                        key={capacity}
                                                        style={{
                                                            color: "var(--color-white)",
                                                            fontSize: "2rem"
                                                        }}
                                                    />
                                                ))}
                                        </Box>
                                    )}
                                    ;
                                </Box>

                                <Stack>
                                    <p className="title secondary-light">
                                        $ {price}
                                    </p>

                                    <p className="parraph secondary-light">
                                        person per night
                                    </p>
                                </Stack>

                                <Button variant="contained" color="primary">
                                    RESERVATION
                                </Button>

                                <Box sx={{ }}>
                                    <IconButton size="sm" color="neutral">
                                        <Favorite />
                                    </IconButton>

                                    <IconButton
                                        size="sm"
                                        color="neutral"
                                        sx={{ }}
                                    >
                                        <CreateNewFolder />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Box>
                    </CardCover>
                </Box>
            </Card>
        </Link>
    );
};
