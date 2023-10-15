
import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Breadcrums from "../components/breadcrumbs/Breadcrums";
import { DisplayData } from "../components/displayData/DisplayData";
import { Loading } from "../components/loading/Loading";
import { RoomItemListContainer } from "../components/rooms/RoomItemListContainer";
import { SearchForRoom } from "../components/search/SearchForRoom";
import { useRoomContext } from "../context/RoomProvider";
import { FilterIcons } from "../filter/FilterIcons";

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
        <Container  sx={{
            width: "100vw",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            padding: "1rem",                
            margin: { xs: 0, md: 0, lg: 0 },                
        }}>
            
            <SearchForRoom search={search} />

            <DisplayData 
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
