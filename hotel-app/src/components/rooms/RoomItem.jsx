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
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import FormHelperText from '@mui/material/FormHelperText';



export const RoomItem = ({ data }) => {

    const title = data.title
    const capacity =     data.capacity
    const amenities =     data.amenities
    const allows =     data.allows
    const donts =     data.donts
    const description =     data.description
    const price =     data.price
    const imgUrl =     data.imgUrl

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
                    <Box sx={{ display: "flex", flexDirection: "column", top: "1rem"}}>
                        <Typography variant="h6" sx={{ color: "#fff", alignSelf: "start", padding: "3rem 2rem", fontWeight: "bold", letterSpacing: 1}}>
                    
                                {title}
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                height: "100%",
                                flexDirection: "column",
                                justifyContent: "end",
                                alignItems: "end",
                                gap:"1rem",
                                alignSelf: "end",
                                padding: "3rem 2rem"
                            }}
                        >

                            <Box
                                sx={{ ml: "auto" }}>
                                <IconButton size="sm"
                                    color="neutral"
                                    
                                >
                                    <Favorite />
                                </IconButton>
                                
                                <IconButton
                                    size="sm"
                                    color="neutral"
                                    sx={{ ml: "0.5rem" }}
                                >
                                    <CreateNewFolder />
                                </IconButton>
                            </Box>

                            <Chip
                                variant="outlined"
                                color="neutral"
                                size="sm"
                                sx={{
                                    borderRadius: "sm",
                                    ml: "auto",
                                    display: "flex",
                                }}
                            >
                                <Typography 
                                    sx={{ fontSize: "0.8rem", color: "#fff" }}
                                >
                                    {capacity}
                                </Typography>
                               
                                <BoyRounded sx={{ color: "#fff" }} />
                               
                            </Chip>

                            <Stack>
                                <Typography 
                                    sx={{ fontSize: "5rem", color: "#fff" }}
                                >
                                    $ {price}
                                </Typography>

                                <FormHelperText
                                    sx={{ color: "#fff", alignSelf: "end" }}
                                    > person per night</FormHelperText>

                            </Stack>

                            <Button
                                variant="contained"
                                color="primary"
                                >
                                RESERVATION
                            </Button>
                        </Box>
                    </Box>
                </CardCover>
            </Box>
        </Card>
    );
};
