import { Box } from '@mui/material';
import React from 'react';
import { ViewHeadlineRounded, GridViewRounded } from "@mui/icons-material";

const views = [
    {
        name: "list",
        icon: <ViewHeadlineRounded />
    },
    {
        name: "grid",
        icon: <GridViewRounded />
    }
]



const ItemView = ({ name, icon, select, setSelect }) => {
  const isSelected = name === select;
  
  const handleClick = () => {
    setSelect(name);
  };
 
  return (
    <Box className={`data-btn ${isSelected? "isSelected" : "" }`} onClick={handleClick}>
      {icon}
    </Box>
  );
};



export const FilterView = ({ select, setSelect }) => {
  return (
    <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'end' }}>
      {views.map((view) => (
        <ItemView
          select={select}
          setSelect={setSelect}
          icon={view.icon}
          name={view.name}
          key={view.name}
        />
      ))}
    </Box>
  );
};
