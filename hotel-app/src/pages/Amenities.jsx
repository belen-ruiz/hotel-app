import { Typography, Box } from '@mui/material'
import React from 'react'
import { confort } from "../utils/confort"

export const Amenities = () => {
  return (
    <div>Amenities

            {confort.map(( service )=>( service && (
              <Box>
                <Box>

                {service.icon}
                </Box>

                <Typography>

                {service.name}
                </Typography>
              </Box>
            )))}
    </div>
  )
}
