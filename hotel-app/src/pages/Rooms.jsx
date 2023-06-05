
import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Breadcrums from "../components/breadcrumbs/Breadcrums";
import { DisplayData } from "../components/displayData/DisplayData";
import { Hero } from "../components/hero/Hero";
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
        <Container>
            <Hero 
                pageTitle="Our Rooms" 
                imgUrl="https://images.pexels.com/photos/2121120/pexels-photo-2121120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>


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
