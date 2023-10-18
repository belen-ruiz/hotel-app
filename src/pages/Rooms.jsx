
import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FilterData } from "../components/filterData/FilterData";
import { Loading } from "../components/loading/Loading";
import { RoomItemListContainer } from "../components/rooms/RoomItemListContainer";
import { SearchForRoom } from "../components/sections/search/SearchForRoom";
import { useRoomContext } from "../context/RoomProvider";
import { Pages } from "../custom/Display"

export const Rooms = () => {
    const [select, setSelect] = useState("list");
    const { loading, search, setIsList, totalGuests, getAllRooms } = useRoomContext();

    useEffect(() => {
        if (select === "list") {
            setIsList(true);
        } else {
            setIsList(false);
        }
    }, [select, loading]);

    
    return (
        <Container sx={{ Pages }}>
            
            <SearchForRoom search={search} />

            <FilterData 
                getAllRooms={getAllRooms} 
                totalGuests={totalGuests} 
                setSelect={setSelect} 
                select={select}
            />

            {loading && <Loading /> }
            
            <RoomItemListContainer />
        </Container>
    );
};
