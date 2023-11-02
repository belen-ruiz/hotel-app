import { Typography, Box, Stack, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BoyRounded } from "@mui/icons-material";
import { Divider } from "@mui/material";
import MuiInput from "@mui/material/Input";

import { searchDates, searchGuests } from "../../../utils/search";

import { Zoom, Fade } from "react-awesome-reveal";

import dayjs from "dayjs";


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
}) => {
    return (
            <Box className="container-search a-center breen-bc">
                {/* dates */}
                {searchDates &&
                    searchDates.map(
                        (elem) =>
                            elem && (
                                <>
                                    <Box key={elem.id} className="a-center">
                                        <div className="block-font green" >{elem.label}</div>
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

                {/* guests */}
                {searchGuests &&
                    searchGuests.map(
                        (elem) =>
                            elem && (
                                <>
                                    <Stack key={elem.id}>
                                        <div className="block-font green">{elem.label}</div>
                                        <Box className="d-flex">
                                                                                                                                    {/* icon */}
                                            <Box className="green">
                                                <BoyRounded />
                                            </Box>
                                            {/* range */}
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
                                                    className="white"
                                                    style={{
                                                        width: "70px",
                                                    }}
                                                />
                                            </Box>

                                            {/* arrow */}
                                            <Box>
                                                <Input
                                                    className="green"
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
                                                        max: 5,}}
                                                />
                                            </Box>
                                        </Box>
                                    </Stack>
                                </>
                            )
                    )}

                {/* button */}
                <Zoom duration={1000} delay={1} >
                    <Box onClick={handleClick} className="btn contained-btn">
                        RESERVATION
                    </Box>
                </Zoom>
            </Box>
    );
};
