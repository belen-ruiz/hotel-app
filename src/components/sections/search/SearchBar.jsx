import { Typography, Box, Stack, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BoyRounded } from "@mui/icons-material";
import { Divider } from "@mui/material";
import MuiInput from "@mui/material/Input";

import { searchDates } from "../../../utils/searchDates";
import { searchGuests } from "../../../utils/searchGuests";

import { ContainedButton } from "../../../custom/Buttons";
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
} from "../../../custom/Typography";

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
        <Container sx={{ ...GreenBC, width: "fit-content", }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    width: "100%",
                    justifyContent: "space-around",
                    alignItems: "center",
                    padding: "1rem",
                    borderRadius: "10px",
                    gap: "1rem",
                    
                }}
            >
                {/* dates */}
                {searchDates &&
                    searchDates.map(
                        (elem) =>
                            elem && (
                                <>
                                    <Box key={elem.id}>
                                        <p style={Label}>{elem.label}</p>
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
                                        <p style={Label}>{elem.label}</p>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                gap: "1rem",
                                            }}
                                        >
                                            <Box sx={{ ...White }}>
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
                                                    style={{
                                                        width: "70px",
                                                        ...White,
                                                    }}
                                                />
                                            </Box>

                                            {/* arrow */}
                                            <Box>
                                                <Input
                                                    style={{ ...White }}
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
                    <Box onClick={handleClick} sx={ContainedButton}>
                        RESERVATION
                    </Box>
                </Zoom>
            </Box>
        </Container>
    );
};
