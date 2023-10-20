import { Box } from '@mui/material';
import React from 'react';
import { itemView } from '../../utils/itemView';
import { DataButton } from "../../custom/Buttons";
import { White, Green, WhiteBC, GreenBC } from "../../custom/Typography";



const ItemView = ({ name, icon, select, setSelect }) => {
  const isSelected = name === select;
  
  const handleClick = () => {
    setSelect(name);
  };

  const itemStyle = {
    backgroundColor: isSelected ? {...WhiteBC} : {...GreenBC},
    color: isSelected ? {...Green} : {...White},
  };

  return (
    <Box className="data-btn" sx={itemStyle} onClick={handleClick}>
      {icon}
    </Box>
  );
};



export const FilterIcons = ({ select, setSelect }) => {
  return (
    <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'end' }}>
      {itemView.map((view) => (
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
