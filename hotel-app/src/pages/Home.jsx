import { Container } from '@mui/material'
import React from 'react'
import { Carrousel } from '../components/carrousel/Carrousel'
import { SearchForRoom } from '../components/search/SearchForRoom'
import { Features } from '../components/features/Features'
import { Testimonials } from '../components/testimonials/Testimonials'
import { AboutUs } from '../components/about/AboutUs'
import { Map } from '../components/map/Map'

export const Home = () => {
  return (
    <Container>
      <Carrousel />
      <SearchForRoom />
      <Features />
      <Testimonials />
      <AboutUs />
      <Map />
    </Container>
  )
}
