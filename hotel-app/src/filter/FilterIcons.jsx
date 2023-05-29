import { Box } from '@mui/material'
import React from 'react'
import { itemView } from '../utils/itemView'


export const FilterIcons = () => {
  return (
    <Box sx={{display: "flex", gap: "1rem", justifyContent: "end", }}>
        {itemView.map((elem) => (
                <div key={elem.name}> {elem.icon} </div>
           ))} 
    </Box>
    
  )
}


