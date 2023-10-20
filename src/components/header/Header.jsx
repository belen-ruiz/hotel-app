import React from 'react'
import { Navbar } from './Navbar'
import { Container } from '@mui/material';
import { MainSections } from "../../custom/Display";


export const Header = () => {
  return (
    <Container className="mainSections">
      <Navbar />
    </Container>
  )  
}
