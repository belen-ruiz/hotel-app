import { Grid } from '@mui/material'
import { Container, Typography, Box } from '@mui/material'
import React from 'react'
import { Hero } from '../components/hero/Hero'
import { confort } from "../utils/confort"

export const Amenities = () => {
  return (
    <Container sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      
            
            <Hero pageTitle="Amenities" imgUrl="https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>


            <Grid container spacing={2}  sx={{ justifyContent: "space-between" }}>
            {confort.map(( service )=>( service && (
              <Grid item xs={4}>
                <Box>

                {service.icon}
                </Box>

                <Typography>

                {service.name}
                </Typography>
              </Grid>
            )))}
            </Grid>
    </Container>
  )
}
