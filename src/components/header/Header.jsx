import React from 'react'
import { Navbar } from './Navbar'
import { Intro } from "./Intro";
import { Container } from '@mui/material';


export const Header = () => {
  return (
    <Container  sx={{
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: { xs: 0, md: 0, lg: 0 },                
      margin: { xs: 0, md: 0, lg: 0 },  
  }}>
      <Intro />

      <Navbar />
    </Container>
  )  
}
