import { Typography, Box, Stack, Button } from "@mui/material";
import React, { useState } from "react";

import FormHelperText from "@mui/material/FormHelperText";

import MuiInput from "@mui/material/Input";
import { BoyRounded } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

import { useRoomContext } from "../../context/RoomProvider";

import { searchDates } from "../../utils/searchDates";
import { Divider } from "@mui/material";
import { InputLabel } from "@mui/material";

import { searchGuests } from "../../utils/searchGuests"

const Input = styled(MuiInput)`
    width: 42px;
`;

export const SearchBar = ({
    handleChangeDate,
    handleSliderChange,
    handleInputChange,
    handleBlur,
    kids, 
    adults,
    handleClick,
}) => {

    
    return (
        <Container sx={{}}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    backgroundColor: "#f0efed",
                    boxShadow: "10px 10px 35px -21px rgba(69,68,69,1)",
                    padding: "2rem",
                    borderRadius: "10px",
                }}
            >
                {searchDates &&
                    searchDates.map(
                        (elem) =>
                            elem && (
                                <>
                                    <Box key={elem.id}>
                                        <InputLabel>{elem.label}</InputLabel>
                                        <input
                                            type="date"
                                            label={elem.label}
                                            id={elem.id}
                                            name={elem.name}
                                            onChange={handleChangeDate}
                                            min={elem.min}
                                            max={elem.max}
                                        />
                                    </Box>
                                </>
                            )
                    )}

                <Divider orientation="vertical" flexItem />

                {searchGuests &&
                    searchGuests.map(
                        (elem) =>
                            elem && (
                                <>
                                    <Box key={elem.id}>
                                        <InputLabel>{elem.label}</InputLabel>
                                        <Box sx={{ display: "flex" }}>
                                            <Box>
                                                <BoyRounded />
                                            </Box>

                                            <Box>
                                                <input
                                                    type="range"
                                                    id={elem.id}
                                                    name={elem.name}
                                                    onChange={handleSliderChange}
                                                    value={ elem.id === "adults"? adults : kids }
                                                    step={1}    
                                                    min={0}
                                                    max={5}
                                                    style={{ width: "100px" }}
                                                />
                                            </Box>

                                            <Box>
                                                <Input
                                                    id={elem.id}
                                                    size="small"
                                                    value={ elem.id === "adults"? adults : kids }
                                                    onChange={handleInputChange}
                                                    onBlur={handleBlur}
                                                    inputProps={{
                                                        step: 1,
                                                        min: 0,
                                                        max: 5,
                                                        type: "number",
                                                        "aria-labelledby":
                                                            "input-slider",
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                </>
                            )
                    )}


                <Box sx={{ width: 150 }}>
                    <Button
                        onClick={handleClick}
                        variant="contained"
                        color="primary"
                    >
                        Check Availability
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};