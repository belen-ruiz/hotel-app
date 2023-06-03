import { Typography } from '@mui/material'
import { Box, Toolbar, Container } from '@mui/material'
import React from 'react'
import { socialmedia } from "../../utils/socialmedia"
import { fastcontact } from "../../utils/fastcontact"


export const Banner = () => {

  return (
    <Container style={{ background: '#fff' }}>
      <Toolbar sx={{ justifyContent: 'space-between', alignContent: "center", minHeight: "auto"}}>
        {fastcontact.map((data) => (
          <Box
            key={data.text}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              color: '#858484',
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
            color: '#858484',
            gap: 1,
          }}>
          {socialmedia.map((icon) => (icon))}
        </Box>
      </Toolbar>
    </Container>
  )
}
