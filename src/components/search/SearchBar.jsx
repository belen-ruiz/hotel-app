import { Typography, Box, Stack, Container } from "@mui/material";
import React, { useState } from "react";

import MuiInput from "@mui/material/Input";
import { BoyRounded } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

import { searchDates } from "../../utils/searchDates";
import { Divider } from "@mui/material";

import { searchGuests } from "../../utils/searchGuests";
import { ContainedButton } from "../../custom/buttons/CustomButton";

import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const Input = styled(MuiInput)`
    width: 30px;
`;

export const SearchBar = ({
    handleChangeDate,
    handleSliderChange,
    handleInputChange,
    handleBlur,
    kids,
    adults,
    handleClick,
    startDate
}) => {
    return (
        <Container sx={{ width: "100%" }}>
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-around",
                    alignItems: "center",
                    boxShadow: "10px 10px 35px -21px rgba(69,68,69,1)",
                    padding: "2.5rem",
                    borderRadius: "10px",
                    gap: "1rem",
                }}
            >
                {searchDates &&
                    searchDates.map(
                        (elem) =>
                            elem && (
                                <>
                                    <Box key={elem.id}>
                                        <DemoContainer components={["DatePicker"]}>
                                            <DemoItem>
                                                <DatePicker
                                                    defaultValue={dayjs("2022-04-17")}
                                                    // value={value}
                                                    label={elem.label}
                                                    id={elem.id}
                                                    name={elem.name}
                                                    onChange={handleChangeDate}
                                                    min={elem.min}
                                                    max={elem.max}
                                                    views={['year', 'month', 'day']}
                                                />
                                            </DemoItem>
                                        </DemoContainer>
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
                                    <Stack key={elem.id}>
                                        <p className="title-2 primary">
                                            {elem.label}
                                        </p>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                gap: "1rem",
                                            }}
                                        >
                                            <Box>
                                                <BoyRounded />
                                            </Box>

                                            <Box>
                                                <input
                                                    type="range"
                                                    id={elem.id}
                                                    name={elem.name}
                                                    onChange={
                                                        handleSliderChange
                                                    }
                                                    value={
                                                        elem.id === "adults"
                                                            ? adults
                                                            : kids
                                                    }
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
                                                    value={
                                                        elem.id === "adults"
                                                            ? adults
                                                            : kids
                                                    }
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
                                    </Stack>
                                </>
                            )
                    )}

                <Box onClick={handleClick} sx={ContainedButton}>
                    RESERVATION
                </Box>
            </Box>
        </Container>
    );
};
