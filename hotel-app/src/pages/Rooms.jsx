import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Breadcrums from "../components/breadcrumbs/Breadcrums";
import { Loading } from "../components/loading/Loading";
import { RoomItemContainer } from "../components/rooms/RoomItemContainer";
import { RoomItemGridContainer } from "../components/rooms/RoomItemGridContainer";
import { RoomItemListContainer } from "../components/rooms/RoomItemListContainer";
import { SearchForRoom } from "../components/search/SearchForRoom";
import { useRoomContext } from "../context/RoomProvider";
import { FilterIcons } from "../filter/FilterIcons";

export const Rooms = () => {
    const [select, setSelect] = useState("list");
    const { loading, search, setIsList, totalGuests, getAll } = useRoomContext();

    useEffect(() => {
        if (select === "list") {
            setIsList(true);
        } else {
            setIsList(false);
        }
    }, [select, loading]);

    return (
        <Container>
            Rooms
            <SearchForRoom search={search} />
            <FilterIcons setSelect={setSelect} select={select} />
            {/* {view} */}
            {loading && <Loading /> }
            
            {totalGuests === 0 ? (
                <Typography>
                    Showing results for all Rooms 
                </Typography>
            ):(
              <>
                <Typography>
                      Showing results for Rooms for {totalGuests}
                      people
                </Typography>
                
                <Button onClick={getAll}>
                      Show all
                </Button>
                
              </>
            )
            }
            <RoomItemListContainer />
        </Container>
    );
};
