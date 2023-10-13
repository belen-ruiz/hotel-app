import React from 'react'
import { Navbar } from './Navbar'
import { Container } from '@mui/material';


export const Header = () => {
  return (
    <Container  
    maxWidth="md"
    disableGutters
    sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      //padding: { xs: 0, md: 0, lg: 0 },                
      //margin: { xs: 0, md: 0, lg: 0 },  
  }}>

      <Navbar />
    </Container>
  )  
}
