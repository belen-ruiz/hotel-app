import { Container } from '@mui/material'
import React from 'react'
import { Carrousel } from '../components/carrousel/Carrousel'
import { SearchForRoom } from '../components/search/SearchForRoom'
import { Features } from '../components/features/Features'
import { Testimonials } from '../components/testimonials/Testimonials'
import { AboutUs } from '../components/about/AboutUs'
import { Map } from '../components/map/Map'
import { RoomItemContainer } from '../components/rooms/RoomItemContainer'


export const Home = () => {
  return (
    <Container>
      <Carrousel />
      <Features />
      <SearchForRoom />
      <RoomItemContainer />
      <Testimonials />
      <AboutUs />
      <Map />
    </Container>
  )
}
