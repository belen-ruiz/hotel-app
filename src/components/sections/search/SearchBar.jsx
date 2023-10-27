import { Typography, Box, Stack, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BoyRounded } from "@mui/icons-material";
import { Divider } from "@mui/material";
import MuiInput from "@mui/material/Input";

import { searchDates } from "../../../utils/searchDates";
import { searchGuests } from "../../../utils/searchGuests";

import { ContainedButton } from "../../../styles/Buttons";
import { Zoom, Fade } from "react-awesome-reveal";

import dayjs from "dayjs";

import {
    White,
    WhiteBC,
    Green,
    GreenBC,
    OrangeBC,
    TopText,
    Title,
    Subtitle,
    Label,
} from "../../../styles/Typography";

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
        <Container className="breen-bc">
            <Box className="boxResponsive">
                {/* dates */}
                {searchDates &&
                    searchDates.map(
                        (elem) =>
                            elem && (
                                <>
                                    <Box key={elem.id}>
                                        <p className="label" >{elem.label}</p>
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
                                        <p className="label">{elem.label}</p>
                                        <Box className="flex-box">
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
                                                    className="white"
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

                {/* button */}
                <Zoom duration={1000} delay={1} >
                    <Box onClick={handleClick} className="btn contained-btn">
                        RESERVATION
                    </Box>
                </Zoom>
            </Box>
        </Container>
    );
};
