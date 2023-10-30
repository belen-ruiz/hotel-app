
import { Container, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BreadcrumbsContainer } from "../components/breadcrumbs/BreadcrumbsContainer";
import { FilterData } from "../components/filter/FilterData";
import { Loading } from "../components/loading/Loading";
import { RoomItemListContainer } from "../components/rooms/RoomItemListContainer";
import { SearchForRoom } from "../components/sections/search/SearchForRoom";
import { Titles } from "../components/titles/Titles";
import { useRoomContext } from "../context/RoomProvider";


export const Rooms = () => {
    const [select, setSelect] = useState("list");
    const { loading, setIsList, totalGuests, getAllRooms } = useRoomContext();

    const title = "Rooms"

    useEffect(() => {
        if (select === "list") {
            setIsList(true);
        } else {
            setIsList(false);
        }
    }, [select, loading]);

     
    return (
        <Container className="page-container p-0">            
            <Stack className="a-center" spacing={6}>
                <BreadcrumbsContainer />

                <Titles style={{color: "#d5d8d5"}}
                    title={title} 
                    />

                <FilterData 
                    getAllRooms={getAllRooms} 
                    totalGuests={totalGuests} 
                    setSelect={setSelect} 
                    select={select}
                />
                
                {loading && <Loading /> }
                
                <RoomItemListContainer />

                <SearchForRoom />
            </Stack>
        </Container>
    );
};

           