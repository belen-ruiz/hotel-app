import { Box } from '@mui/material';
import React from 'react';
import { itemView } from '../../utils/itemView';



const ItemView = ({ name, icon, select, setSelect }) => {
  const isSelected = name === select;
  
  const handleClick = () => {
    setSelect(name);
  };

 
  return (
    <Box className={`data-btn ${isSelected? "white-bc" : "green-bc" }`} onClick={handleClick}>
      {icon}
    </Box>
  );
};



export const FilterView = ({ select, setSelect }) => {
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
