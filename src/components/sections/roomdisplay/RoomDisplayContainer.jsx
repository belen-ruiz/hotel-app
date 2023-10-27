import { Container, Stack, Box } from "@mui/material";
import React, { useRef, useState } from "react";
import { TitlesSecondary } from "../../titles/Titles";
import { ScrollContainer } from "./ScrollContainer";


export const RoomDisplayContainer = ({}) => {
    const topText = "Discover our rooms"
    const title = "Choose your room"
    const subtitle = "the Best place to enjoy life place to enjoy life place to enjoy life place to enjoy."

    return (
        <Container className="section d-start green-bc">
                <Box className="section d-start containerResponsive">
                    {/* titles */}
                    <TitlesSecondary 
                        topText={topText} 
                        title={title}
                        subtitle={subtitle}
                        />
            
                    {/* scroll container */}
                    <Stack spacing={2} className="d-center scrollResponsive">
                        {/* scroll */}
                        <ScrollContainer />
                        
                    </Stack>
                </Box>
            </Container>
    );
}; 
