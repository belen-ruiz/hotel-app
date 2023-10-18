
import { Container, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FilterData } from "../components/filterData/FilterData";
import { Loading } from "../components/loading/Loading";
import { RoomItemListContainer } from "../components/rooms/RoomItemListContainer";
import { SearchForRoom } from "../components/sections/search/SearchForRoom";
import { useRoomContext } from "../context/RoomProvider";
import { MainSections, alignCenter } from "../custom/Display"

import {
    White,
    WhiteBC,
    GreenBC,
    OrangeBC,
    TopText,
    Title,
    Subtitle,
    TextAlignJustify, TextAlignCenter, 
} from "../custom/Typography";


export const Rooms = () => {
    const [select, setSelect] = useState("list");
    
    const { loading, setIsList, totalGuests, getAllRooms } = useRoomContext();

    useEffect(() => {
        if (select === "list") {
            setIsList(true);
        } else {
            setIsList(false);
        }
    }, [select, loading]);

    
    return (
        <Container sx={{ ...MainSections }}>
            
            <Stack spacing={6} sx={{ width: "100%" }}>
                <SearchForRoom />

                <Titles />

                <FilterData 
                    getAllRooms={getAllRooms} 
                    totalGuests={totalGuests} 
                    setSelect={setSelect} 
                    select={select}
                />
                
                {loading && <Loading /> }
                
                <RoomItemListContainer />
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
            <p style={{ ...Title, ...White }}>Our services</p>

            <p style={{ ...Subtitle, ...White }}>
                Enjoy all benefits while you stay
            </p>
        </Stack>
)
}