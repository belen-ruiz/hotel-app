import { Container, Stack } from "@mui/material";
import React from "react";
import { BreadcrumbsContainer } from "../components/breadcrumbs/BreadcrumbsContainer";
import { RoomDetailContainer } from "../components/rooms/RoomDetailContainer";
import { SearchForRoom } from "../components/sections/search/SearchForRoom";
import { Titles } from "../components/titles/Titles";


export const RoomDetails = () => {
    const title = "Room Details"
    
    return (
        <Container className="page-container p-0">
            <Stack className="a-center" spacing={6}>
                <BreadcrumbsContainer />
                
                <Titles style={{color: "#d5d8d5"}}
                    title={title} 
                    />
                
                <RoomDetailContainer />
                
                <SearchForRoom />
            </Stack>
        </Container>
    );
};


