import { Typography, Box, Container } from "@mui/material";
import React from "react";

export const Hero = ({ pageTitle, imgUrl }) => {
    return (
        <Container sx={{width: "100%", height: "300px", overflow: "hidden"}}>
            <Typography variant="h6" sx={{position: "absolute", top: "100px", left: "50%", zIndex:"888"}}>
              {pageTitle}
            </Typography>
            
            <Box sx={{position: "relative"}}>
              <img src={imgUrl} alt="" style={{width: "100%", height: "30vh"}}/>
            </Box>
        </Container>
    );
};

