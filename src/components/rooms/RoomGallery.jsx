

import { Star } from "@mui/icons-material";
import { StarBorder } from "@mui/icons-material";
import { BoyRounded } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { Zoom, Fade } from "react-awesome-reveal";
 

export const RoomGallery = ({ room }) => {
    const imgUrl = room.imgUrl;
    const images = room.images;


    return (
        <>
            <Box
                sx={{
                    display: "grid",
                    gap: "2rem",
                    gridTemplateColumns:
                        "repeat(auto-fill, minmax(300px, 1fr))",
                        
                }}
            >
                {images &&
                    images.map((img, i) => (
                        <img
                            key={`Image ${i}`}
                            src={img}
                            alt={`Image ${i}`}
                            style={{ maxWidth: "100%", height: "auto", maxHeight:"80vh" }}
                        />
                    ))}
                
            </Box>       
        </>
    );
};
