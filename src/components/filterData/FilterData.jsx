import { Button, Box, Typography } from "@mui/material";
import React from "react";
import { FilterIcons } from "./FilterIcons";
import { DataButton } from "../../custom/Buttons";
import { dataDisplay } from "../../custom/Typography";

export const FilterData = ({ getAllRooms, totalGuests, setSelect, select }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "0 2rem"
            }}
        >
            {totalGuests > 0 && totalGuests < 5 ? (
                <>
                    <Box className="dataDisplay">
                        Showing results for Rooms for {totalGuests} people
                    </Box>
                    <Box className="dataButton" onClick={getAllRooms}>
                        Show all Rooms
                    </Box>
                </>
            ) : null}
            {totalGuests > 5 ? (
                <>
                    <Box className="dataDisplay"> 
                        No rooms available for {totalGuests} people
                    </Box>
                    <Box className="dataButton" onClick={getAllRooms}>
                        Show all Rooms
                    </Box>
                </>
            ) : null}

            {totalGuests === 0 ? (
                <Box className="dataDisplay"> Showing results for all Rooms</Box>
            ) : null}

            <FilterIcons setSelect={setSelect} select={select} />
        </Box>
    );
};
