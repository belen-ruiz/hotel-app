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

const Input = styled(MuiInput)`
    width: 42px;
`;

export const SearchBar = ({
    handleChangeDate,
    handleSliderChange,
    handleInputChange,
    handleBlur,

    handleClick
}) => {
    const { adults, kids } = useRoomContext();

    

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
                                            type={elem.type}
                                            label={elem.label}
                                            id={elem.id}
                                            name={elem.name}
                                            onChange={handleChangeDate}
                                            min={elem.min}
                                            max={elem.max}
                                        />
                                    </Box>
                                    <Divider orientation="vertical" flexItem />
                                </>
                            )
                    )}

                <Box>
                    <InputLabel>Adults</InputLabel>
                    <Box sx={{ display: "flex" }}>
                        <Box>
                            <BoyRounded />
                        </Box>

                        <Box>
                            <input
                                type="range"
                                id="adults"
                                name="adult-guests"
                                value={adults}
                                onChange={handleSliderChange}
                                step={1}
                                min={1}
                                max={5}
                                style={{ width: "100px" }}
                            />
                        </Box>

                        <Box>
                            <Input
                                id="adults"
                                value={adults}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 5,
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                }}
                            />
                        </Box>
                    </Box>
                </Box>

                <Divider orientation="vertical" flexItem />

                <Box>
                    <InputLabel>Kids</InputLabel>

                    <Box sx={{ display: "flex" }}>
                        <Box>
                            <BoyRounded />
                        </Box>

                        <Box>
                            <input
                                style={{ width: "100px" }}
                                type="range"
                                id="kids"
                                name="kids-guests"
                                value={kids}
                                onChange={handleSliderChange}
                                step={1}
                                min={1}
                                max={5}
                            />
                        </Box>

                        <Box>
                            <Input
                                value={kids}
                                size="small"
                                id="kids"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 5,
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                }}
                            />
                        </Box>
                    </Box>
                </Box>

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

// import { Typography, Box, Stack, Button } from "@mui/material";
// import React, { useState } from "react";

// import FormHelperText from "@mui/material/FormHelperText";

// import Grid from "@mui/material/Grid";
// import Slider from "@mui/material/Slider";
// import MuiInput from "@mui/material/Input";
// import { BoyRounded } from "@mui/icons-material";
// import { styled } from "@mui/material/styles";
// import { Container } from "@mui/material";

// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { useRoomContext } from "../../context/RoomProvider";

// import dayjs from "dayjs";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { TextField } from "@mui/material";
// import { GifBoxSharp } from "@mui/icons-material";

// const Input = styled(MuiInput)`
//     width: 42px;
// `;

// export const SearchBar = ({
//     handleAdultSliderChange,
//     handleAdultInputChange,
//     handleAdultBlur,
//     handlekidsSliderChange,
//     handlekidsInputChange,
//     handlekidsBlur,
//     startDate,
//     setStartDate,
//     endDate,
//     setEndDate,
// }) => {
//     const { adults, setAdults, kids, setKids, handleClick } = useRoomContext();

//     return (
//         <Container sx={{ backgroundColor: "#858484" }}>
//             <Box
//                 sx={{
//                     paddingTop: "4rem",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     gap: "2rem",
//                 }}
//             >
//                 <Box sx={{ width: 200 }}>
//                     <DemoContainer components={["DatePicker"]}>
//                         <DemoItem>
//                             <DatePicker
//                                 label="Check in"
//                                 value={dayjs("2023-08-17")}
//                                 onChange={(date) => setStartDate(date)}
//                             />
//                         </DemoItem>
//                     </DemoContainer>
//                 </Box>

//                 <Box sx={{ width: 200 }}>
//                     <DemoContainer components={["DatePicker"]}>
//                         <DemoItem>
//                             <DatePicker
//                                 label="Check out"
//                                 value={dayjs("2023-08-17")}
//                                 onChange={(date) => setEndDate(date)}
//                             />
//                         </DemoItem>
//                     </DemoContainer>
//                 </Box>

//                 <Box sx={{ width: 200 }}>
//                     <input
//                         type="date"
//                         id="start"
//                         name="trip-start"
//                         value="2018-07-22"
//                         min="2018-01-01"
//                         max="2018-12-31"
//                     />
//                 </Box>
//                 <Box sx={{ width: 200 }}>
//                     <TextField
//                         type="date"
//                         id="start"
//                         name="trip-start"
//                         value="2018-07-22"
//                         min="2018-01-01"
//                         max="2018-12-31"
//                     />
//                 </Box>

//                 <Box sx={{ width: 200 }}>
//                     <TextField
//                         type="range"
//                         id="start"
//                         name="trip-start"
//                         value="2018-07-22"
//                         min="2018-01-01"
//                         max="2018-12-31"
//                     />
//                 </Box>

//                 <Box sx={{ width: 150 }}>
//                     <Typography id="input-slider" variant="caption">
//                         Adult
//                     </Typography>

//                     <Grid container spacing={2} alignItems="center">
//                         <Grid item>
//                             <BoyRounded />
//                         </Grid>

//                         <Grid item xs>
//                             <Slider
//                                 id="adult"
//                                 size="small"
//                                 value={adults ? adults : 0}
//                                 onChange={handleAdultSliderChange}
//                                 step={1}
//                                 min={1}
//                                 max={5}
//                                 aria-labelledby="input-slider"
//                             />
//                         </Grid>

//                         <Grid item>
//                             <Input
//                                 value={adults}
//                                 size="small"
//                                 onChange={handleAdultInputChange}
//                                 onBlur={handleAdultBlur}
//                                 inputProps={{
//                                     step: 1,
//                                     min: 0,
//                                     max: 5,
//                                     type: "number",
//                                     "aria-labelledby": "input-slider",
//                                 }}
//                             />
//                         </Grid>
//                     </Grid>
//                 </Box>

//                 <Box sx={{ width: 150 }}>
//                     <Typography id="input-slider" variant="caption">
//                         Niños
//                     </Typography>

//                     <Grid container spacing={2} alignItems="center">
//                         <Grid item>
//                             <BoyRounded />
//                         </Grid>

//                         <Grid item xs>
//                             <Slider
//                                 id="kids"
//                                 size="small"
//                                 value={kids ? kids : 0}
//                                 onChange={handlekidsSliderChange}
//                                 step={1}
//                                 min={0}
//                                 max={5}
//                                 aria-labelledby="input-slider"
//                             />
//                         </Grid>

//                         <Grid item>
//                             <Input
//                                 value={kids}
//                                 size="small"
//                                 onChange={handlekidsInputChange}
//                                 onBlur={handlekidsBlur}
//                                 inputProps={{
//                                     step: 1,
//                                     min: 0,
//                                     max: 5,
//                                     type: "number",
//                                     "aria-labelledby": "input-slider",
//                                 }}
//                             />
//                         </Grid>
//                     </Grid>
//                 </Box>

//                 <Button
//                     onClick={handleClick}
//                     variant="contained"
//                     color="primary"
//                 >
//                     Check Availability
//                 </Button>
//             </Box>
//         </Container>
//     );
// };
