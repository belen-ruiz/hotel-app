import { Button, Box, Typography } from "@mui/material";
import React from "react";
import { FilterIcons } from "../../filter/FilterIcons";

export const FilterData = ({
    getAllRooms,
    totalGuests,
    setSelect,
    select,
}) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
            }}
        >
            {totalGuests > 0 && totalGuests < 5 ? (
                <>
                    <Typography variant="subtitle2">
                        Showing results for Rooms for {totalGuests} people
                    </Typography>
                    <Button onClick={getAllRooms}>Show all Rooms</Button>
                </>
            ) : null}
            {totalGuests > 5 ? (
                <>
                  <Typography variant="subtitle2">
                      No rooms available for {totalGuests} people
                  </Typography>
                  <Button onClick={getAllRooms}>Show all Rooms</Button>
                </>
            ) : null}

            {totalGuests === 0 ? (
                <Typography variant="subtitle2">
                    Showing results for all Rooms
                </Typography>
            ) : null}

            <FilterIcons setSelect={setSelect} select={select} />
        </Box>
    );
};
