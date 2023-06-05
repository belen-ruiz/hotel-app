import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const { loading, setLoading, search, setIsList, totalGuests, renderRooms, getAllRooms, roomsFilter } = useRoomContext();

    const navigate = useNavigate()


    // useEffect(() => {

    //     setTimeout(() => {     
    //         if (totalGuests > 1) {
    //             console.log("total guests")      
    //             roomsFilter()
    //         } else {
    //             console.log("renderroom")      
    //             renderRooms()
    //         }
            
    //         setLoading(false)

    //     }, 2000);
        
    // }, [totalGuests])

    // console.log(totalGuests)
    

    useEffect(() => {
        // initial room render
        setTimeout(() => {
          console.log("renderroom");
          renderRooms();
          setLoading(false);
        }, 2000);
      }, []);


      useEffect(() => {
        // guest render
        setTimeout(() => {
          if (totalGuests) {
            console.log("roomsFiltered");
            roomsFilter();
            navigate("/rooms"); // Navegar al cambiar el estado totalGuests
          }
          setLoading(false);
        }, 2000);
      }, [totalGuests, navigate]);
      


    useEffect(() => {
        //reorder render
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
                
                <Button onClick={getAllRooms}>
                      Show all
                </Button>
                
              </>
            )
            }
            <RoomItemListContainer />
        </Container>
    );
};
