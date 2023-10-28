import { Container, Stack, Box } from "@mui/material";
import React, { useRef, useState } from "react";
import { TitlesSecondary } from "../../titles/Titles";
import { ScrollContainer } from "./ScrollContainer";


export const RoomDisplayContainer = ({}) => {
    const topText = "Discover our rooms"
    const title = "Choose your room"
    const subtitle = "the Best place to enjoy life place to enjoy life place to enjoy life place to enjoy."

    return (
        <Container className="section a-start green-bc">
                <Box className="section a-start container-web p-lg">
                    {/* titles */}
                    <TitlesSecondary className="a-center w-30"
                        topText={topText} 
                        title={title}
                        subtitle={subtitle}
                        />
            
                    {/* scroll container */}
                    <Stack spacing={2} className="a-center w-70">
                        {/* scroll */}
                        <ScrollContainer />
                        
                    </Stack>
                </Box>
            </Container>
    );
}; 