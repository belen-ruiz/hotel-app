import { Box } from '@mui/material';
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { itemView } from '../utils/itemView';

export const FilterIcons = ({ select, setSelect }) => {

  const navigate = useNavigate()

  const handleClick = useCallback((e, name) => {
    setSelect(name);
  }, []);


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
