import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Container, Box, Button } from '@mui/material';
import { GuestsSelect } from "./GuestsSelect"
import { SearchBar } from "./SearchBar"

export const SearchForRoom = () => {
  const [guests, setGuests] = useState(1)
  const [totalGuests, setTotalGuests] = useState()

  const handleChange = (e, value) => {
      console.log("hanldechange de select")
      console.log(e.target.value)
      //setGuests(totalGuests)
      //setTotalGuests(typeof totalGuests === 'number' ? totalGuests.split(',') : totalGuests,);
      //setGuests(totalGuests)
      
    };
    
    console.log(totalGuests)


  return (
    <Container sx={{paddingTop: "4rem"}}>
      <SearchBar />
      <Box sx={{paddingTop: "4rem", display: "flex", justifyContent: "center", alignItems:"center" }}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="select-helper-label">Guests</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Guests"
            onSelect={handleChange}
            value={guests}
          >
              <GuestsSelect 
              totalGuests={totalGuests}          
              setTotalGuests={setTotalGuests}/>
          </Select>
          {totalGuests &&
            <FormHelperText>{totalGuests}</FormHelperText>}
        </FormControl>
        
        <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
          <InputLabel id="select-helper-label">From</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={guests}
            label="frommmm"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={89}>Tenyy</MenuItem>
            <MenuItem value={20}>Twentyyy</MenuItem>
            <MenuItem value={30}>Thirtyyy</MenuItem>
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
