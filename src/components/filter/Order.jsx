import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';

export default function Order({ setOrder }) {
  const [type, setType] = useState("");

  const handleChange = (e) => {
    setType(e.target.value);
  };

  useEffect(() => {
    setOrder(type);
  }, [type, setOrder]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Order By:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Order by"
          onChange={handleChange}
        >
          <MenuItem value={1}>Price</MenuItem>
          <MenuItem value={2}>Capacity</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
