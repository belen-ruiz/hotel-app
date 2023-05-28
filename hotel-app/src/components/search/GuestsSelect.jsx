import { styled } from '@mui/material/styles';
import { Container, Box, Button, Stack } from '@mui/material';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { useState } from 'react';
import { BoyRounded } from '@mui/icons-material';
import { MenuItem } from '@mui/material';

const Input = styled(MuiInput)`
  width: 42px;
`;

export const GuestsSelect = ({ totalGuests, setTotalGuests }) => {


  const [adult, setAdult] = useState(2);
  const [child, setChild] = useState(1);


  const handleAdultSliderChange = (e, value) => {
    console.log("hanldechange de adult change")

    setAdult(value);
  };

  const handleAdultInputChange = (e) => {
    console.log("hanldechange de select")

    setAdult(e.target.value === '' ? '' : Number(e.target.value));
  };

  const handleAdultBlur = () => {
    if (adult < 0) {
        setAdult(0);
    } else if (adult > 5) {
        setAdult(5);
    }
  };

  const handleChildSliderChange = (e, value) => {
    setChild(value);
  };

  const handleChildInputChange = (event) => {
    setChild(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleChildBlur = () => {
    if (adult < 0) {
        setChild(0);
    } else if (adult > 5) {
        setChild(5);
    }
  };

  const handleClick = () => {
    const totalGuests = `${adult} Adult - ${child} Child`
    console.log(totalGuests)
    setTotalGuests(totalGuests)
  }


   return (
    <>
      <MenuItem value={totalGuests}>
        <Stack>
          <Box sx={{ width: 150 }}>
            <Typography id="input-slider" variant="caption">
                        Adultos
            </Typography>
        
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <BoyRounded />
            </Grid>
        
            <Grid item xs>
              <Slider
                id="adult"
                size="small"
                value={adult ? adult : 0}
                onChange={handleAdultSliderChange}
                step={1}
                min={1}
                max={5}
                aria-labelledby="input-slider"
              />
            </Grid>
        
            <Grid item>
              <Input
                value={adult}
                size="small"
                onChange={handleAdultInputChange}
                onBlur={handleAdultBlur}
                inputProps={{
                  step: 1,
                  min: 0,
                  max: 5,
                  type: 'number',
                  'aria-labelledby': 'input-slider',
                }}
              />
            </Grid>
        
          </Grid>
          </Box>
        </Stack>
      </MenuItem>

      <MenuItem value={totalGuests}>
        <Stack>
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
                    id="child"
                    size="small"
                    value={child ? child : 0}
                    onChange={handleChildSliderChange}
                    step={1}
                    min={1}
                    max={5}
                    aria-labelledby="input-slider"
                  />
                </Grid>
            
                <Grid item>
                  <Input
                    value={child}
                    size="small"
                    onChange={handleChildInputChange}
                    onBlur={handleChildBlur}
                    inputProps={{
                      step: 1,
                      min: 1,
                      max: 5,
                      type: 'number',
                      'aria-labelledby': 'input-slider',
                    }}
                  />
                </Grid>
            
              </Grid>
            </Box>
        </Stack>    
      </MenuItem>

      <Button onClick={handleClick}>Aplicar</Button>

    </>
  );
}

