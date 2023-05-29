import { Box } from '@mui/material';
import React, { useState, useEffect, useCallback } from 'react';
import { itemView } from '../utils/itemView';

export const FilterIcons = ({ select, setSelect }) => {
  //const [select, setSelect] = useState('');

  const handleClick = useCallback((e, name) => {
    setSelect(name);
  }, []);

  // useEffect(() => {
  //   if (select !== '') {
  //     console.log(select);
  //     // Realiza acciones adicionales con el valor actualizado de select
  //   }
  // }, [select]);

  return (
    <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'end' }}>
      {itemView.map((view) => (
        <ItemView
          handleClick={handleClick}
          icon={view.icon}
          name={view.name}
          key={view.name}
        />
      ))}
    </Box>
  );
};

const ItemView = ({ name, icon, handleClick }) => {
  return (
    <div onClick={(e) => handleClick(e, name)}>
      <span>{icon}</span>
    </div>
  );
};
