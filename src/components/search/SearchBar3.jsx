import { Typography, Box, Stack, Container } from "@mui/material";
import React, { useState } from "react";

import MuiInput from "@mui/material/Input";
import { BoyRounded } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

import { searchDates } from "../../utils/searchDates";
import { Divider } from "@mui/material";

import { searchGuests } from "../../utils/searchGuests";
import { ContainedButton } from "../../custom/Buttons";

import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
    White, WhiteBC,
    Green, GreenBC, OrangeBC,
    TopText,
    Title,
    Subtitle, Label
} from "../../custom/Typography";


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
    dateValue,
    setDateValue
}) => {

    //const [value, setValue] = useState()
    const today = dayjs();
    const tomorrow = dayjs().add(1, 'day');

    //console.log(dateValue)

    return (
        <Container sx={{ backgroundColor: "#142006", width: "100%",  }}>
            <Box
                sx={{ ...White,
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-around",
                    alignItems: "center",
                    boxShadow: "10px 10px 35px -21px rgba(69,68,69,1)",
                    padding: "1rem",
                    borderRadius: "10px",
                    gap: "1rem",
                }}
            >
                {/* .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root { */}
                {searchDates &&
                    searchDates.map(
                        (elem) =>
                            elem && (
                                <>
                                    <Box key={elem.id} id={elem.id}  >
                                        <DemoContainer components={["DatePicker"]}>
                                                <DatePicker
                                                sx={{
                                                    ".Mui-error, .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-error, .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root, .css-i4bv87-MuiSvgIcon-root, .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root, .css-nz481w-MuiInputBase-input-MuiInput-input, .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-error, .css-nz481w-MuiInputBase-input-MuiInput-input::placeholder, .css-nz481w-MuiInputBase-input-MuiInput-input, MuiInputBase-input MuiInput-input MuiInputBase-inputSizeSmall css-nz481w-MuiInputBase-input-MuiInput-input" : {...White},
                                                    ".MuiFormLabel-root.MuiInputLabel-root.Mui-error, .MuiOutlinedInput-root.Mui-error": {
                                                        borderStyle: "none", }
                                                        //color: "initial",
                                                     
                                                  }}
                                                    
                                                    label={elem.label}
                                                    defaultValue={elem.defaultValue}
                                                    value={dateValue}
                                                    
                                                    onChange={handleChangeDate}
                                                    
                                                    //onChange={(newValue) => setDateValue(newValue)}
                                                   
                                                    //views={['day', 'month', 'year']}
                                                />
                                                {/* <Typography>Value: {dateValue == null ? 'null' : dateValue.format('L')}</Typography> */}
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
                                        <p style={Label} >
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
                                                    style={{ width: "50px" }}
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
