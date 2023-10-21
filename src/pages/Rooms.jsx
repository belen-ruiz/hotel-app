
import { Container, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BreadcrumbsContainer } from "../components/breadcrumbs/BreadcrumbsContainer";
import { FilterData } from "../components/filterData/FilterData";
import { Loading } from "../components/loading/Loading";
import { RoomItemListContainer } from "../components/rooms/RoomItemListContainer";
import { SearchForRoom } from "../components/sections/search/SearchForRoom";
import { useRoomContext } from "../context/RoomProvider";


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
        <Container className="mainSections p-0">            
            <Stack spacing={6} sx={{ width: "100%" }}>
                <BreadcrumbsContainer />

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
            className="section alignCenter"
            sx={{ padding: "1rem 0" }}
        >
            <p className="title orange">Our services</p>

            <p className="subtitle white">
                Enjoy all benefits while you stay
            </p>
        </Stack>
)
}