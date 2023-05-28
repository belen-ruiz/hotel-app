import { Typography } from '@mui/material'
import { Box, Toolbar, Container } from '@mui/material'
import React from 'react'
import { socialmedia } from "../../utils/socialmedia"
import { fastcontact } from "../../utils/fastcontact"


export const Banner = () => {

  console.log(fastcontact)
  return (
    <Container>
      <Toolbar sx={{ justifyContent: 'space-between', alignContent: "center", height: 50, minHeight: false }}>
        {fastcontact.map((data) => (
          <Box
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              color: 'inherit',
              textDecoration: 'underline',
              alignItems: "center",
              gap: 1,
            }}>
              {data.icon}
            <Typography 
              variant="caption">
              {data.text}
            </Typography>
          </Box> 
        ))}
        
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            color: 'inherit',
            gap: 1,
            fontSize: "1rem",
          }}>
          {socialmedia.map((icon) => (icon))}
        </Box>
      </Toolbar>
    </Container>
  )
}