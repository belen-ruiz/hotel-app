import { Typography, Box, Stack, Button } from "@mui/material";
import React, { useState } from "react";

import FormHelperText from "@mui/material/FormHelperText";

import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import { BoyRounded } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useRoomContext } from "../../context/RoomProvider";

const Input = styled(MuiInput)`
    width: 42px;
`;

export const SearchBar = ({ handleAdultSliderChange, handleAdultInputChange, handleAdultBlur, handlekidsSliderChange, handlekidsInputChange, handlekidsBlur, startDate, setStartDate, endDate, setEndDate }) => {

    const { 
        adults,
        setAdults,
        kids,
        setKids,
        handleClick } = useRoomContext()

    
    
    return (
        <Container>
            <Box
                sx={{
                    paddingTop: "4rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2rem"
                }}
            >
                <Box sx={{ width: 200 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker
                        label="Check in"
                        value={dayjs(startDate)}
                        onChange={(date) => setStartDate(date)}
                        />
                    </DemoContainer>
                    </LocalizationProvider>

    
                </Box>




                <Box sx={{ width: 200 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker
                        label="Check out"
                        value={dayjs(endDate)}
                        onChange={(date) => setEndDate(date)}
                        />
                    </DemoContainer>
                    </LocalizationProvider>
                </Box>




                <Box sx={{ width: 150 }}>
                <Typography id="input-slider" variant="caption">
                        Adult
                    </Typography>

                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <BoyRounded />
                        </Grid>

                        <Grid item xs>
                            <Slider
                                id="adult"
                                size="small"
                                value={adults ? adults : 0}
                                onChange={handleAdultSliderChange}
                                step={1}
                                min={1}
                                max={5}
                                aria-labelledby="input-slider"
                            />
                        </Grid>

                        <Grid item>
                            <Input
                                value={adults}
                                size="small"
                                onChange={handleAdultInputChange}
                                onBlur={handleAdultBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 5,
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>




                <Box sx={{ width: 150 }}>
                    <Typography id="input-slider" variant="caption">
                        Niños
                    </Typography>

                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <BoyRounded />
                        </Grid>

                        <Grid item xs>
                            <Slider
                                id="kids"
                                size="small"
                                value={kids ? kids : 0}
                                onChange={handlekidsSliderChange}
                                step={1}
                                min={0}
                                max={5}
                                aria-labelledby="input-slider"
                            />
                        </Grid>

                        <Grid item>
                            <Input
                                value={kids}
                                size="small"
                                onChange={handlekidsInputChange}
                                onBlur={handlekidsBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 5,
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
                



                <Button
                    onClick={handleClick}
                    variant="contained"
                    color="primary"
                >
                    Check Availability
                </Button>
            </Box>
        </Container>
    );
};


