import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Container, Box, Button } from '@mui/material';
import { GuestsSelect } from "./GuestsSelect"

export const SearchForRoom = () => {
  const [guests, setGuests] = useState()

  const handleChange = (e) => {
    setGuests(e.target.value);
  };

  return (
    <Container sx={{paddingTop: "4rem"}}>
      <Box sx={{display: "flex", justifyContent: "center", alignItems:"center" }}>
        <GuestsSelect />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="select-helper-label">Guests</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={guests}
            label="Guests"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          {/* <FormHelperText>Min 1 - Max 4</FormHelperText> */}
        </FormControl>
        
        <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
          <InputLabel id="select-helper-label">From</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={guests}
            label="Guests"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        
        <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
          <InputLabel id="select-helper-label">To</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={guests}
            label="Guests"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        
        <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
          <InputLabel id="select-helper-label">Room</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={guests}
            label="Guests"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        
        <Button 
             variant="contained"
             color="primary"
             >Check Availability
        </Button>
      </Box>
    </Container>
  );
}
