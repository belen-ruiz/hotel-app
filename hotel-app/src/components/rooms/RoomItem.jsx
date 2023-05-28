import React from "react";

import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Chip from "@mui/joy/Chip";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import Visibility from "@mui/icons-material/Visibility";
import CreateNewFolder from "@mui/icons-material/CreateNewFolder";
import { BoyRounded } from "@mui/icons-material";

export const RoomItem = () => {
    //const { imgUrl, title, capacity, amenities, price } = data

    const imgUrl =
        "https://images.pexels.com/photos/6032424/pexels-photo-6032424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    return (
        <Card
            sx={{
                width: 300,
                bgcolor: "initial",
                boxShadow: "none",
                "--Card-padding": "0px",
            }}
        >
            <Box sx={{ position: "relative" }}>
                <AspectRatio ratio="3/4">
                    <figure>
                        <img
                            src={imgUrl}
                            loading="lazy"
                            alt={"Yosemite by Casey Horner"}
                        />
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
                            "linear-gradient(0deg, rgba(2,0,36,0.8379551649761467) 0%, #033e4a34 100%); ",
                    }}
                >
                    {/* The first box acts as a container that inherits style from the CardCover */}
                    <Box>
                        <Typography variant="h6" noWrap sx={{ color: "#fff",}}>
                    
                                Room Name
                        </Typography>

                        <Box
                            sx={{
                                p: 2,
                                display: "flex",
                                alignItems: "center",
                                gap: 1.5,
                                flexGrow: 1,
                                alignSelf: "flex-end",
                            }}
                        >
                            <Chip
                                variant="outlined"
                                color="neutral"
                                size="sm"
                                sx={{
                                    borderRadius: "sm",
                                    py: 0.25,
                                    px: 0.5,
                                }}
                            >
                                <BoyRounded sx={{ color: "#fff" }} />
                                <BoyRounded sx={{ color: "#fff" }} />
                                <BoyRounded sx={{ color: "#fff" }} />
                            </Chip>

                            <IconButton size="sm" color="neutral">
                                <Favorite />
                            </IconButton>

                            <IconButton
                                size="sm"
                                color="neutral"
                                sx={{ ml: "auto" }}
                            >
                                <CreateNewFolder />
                            </IconButton>
                        </Box>
                    </Box>
                </CardCover>
            </Box>
        </Card>
    );
};
