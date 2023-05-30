import { Container } from '@mui/material'
import React, { useState } from 'react'
import { Carrousel } from '../components/carrousel/Carrousel'
import { SearchForRoom } from '../components/search/SearchForRoom'
import { Features } from '../components/features/Features'
import { Testimonials } from '../components/testimonials/Testimonials'
import { AboutUs } from '../components/about/AboutUs'
import { Map } from '../components/map/Map'
import { RoomItemContainer } from '../components/rooms/RoomItemContainer'


export const Home = () => {

  const [search, setSearch] = useState([])


  return (
    <Container>
      <Carrousel />
      <Features />

      <SearchForRoom search={search} setSearch={setSearch}/>
      <RoomItemContainer search={search}/>

      <Testimonials />
      <AboutUs />
      <Map />
    </Container>
  )
}
