import { Container, Stack } from "@mui/material";
import React from "react";
import { BreadcrumbsContainer } from "../components/breadcrumbs/BreadcrumbsContainer";
import { RoomDetailContainer } from "../components/rooms/RoomDetailContainer";
import { SearchForRoom } from "../components/sections/search/SearchForRoom";
import { MainSections, alignCenter } from "../styles/Display"

import {
    White,
    WhiteBC,
    GreenBC,
    OrangeBC,
    Orange,
    TopText,
    Title,
    Subtitle,
    TextAlignJustify, TextAlignCenter, 
} from "../styles/Typography";


export const RoomDetails = () => {
    return (
        <Container className="mainSections p-0">
            <Stack sx={{ width: "100%" }}>
                <BreadcrumbsContainer />
                
                <Titles />
                
                <RoomDetailContainer />
                
                <SearchForRoom />
            </Stack>
        </Container>
    );
};


const Titles = () => {
    return(
        <Stack
            spacing={1}
            sx={{ ...alignCenter, padding: "1rem 0" }}
        >
            <p style={{ ...Title, ...Orange }}>Room Detail</p>

            <p style={{ ...Subtitle, ...White }}>
                Enjoy all benefits while you stay
            </p>
        </Stack>
)
}