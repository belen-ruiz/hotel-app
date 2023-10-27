

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
import { Titles } from "../titles/Titles";
 

export const RoomGallery = ({ room }) => {
    
    const title = "Room Gallery"
    const images = room.images;


    return (
        <>
            <Titles style={{color: "#d5d8d5"}}
                    title={title} 
                    />
            <Box className="gallery-box"  >
                {images &&
                    images.map((img, i) => (
                        <img
                            key={`Image ${i}`}
                            src={img}
                            alt={`Image ${i}`}
                            style={{ maxWidth: "100%", height: "auto"}}
                        />
                    ))}
                
            </Box>       
        </>
    );
};
