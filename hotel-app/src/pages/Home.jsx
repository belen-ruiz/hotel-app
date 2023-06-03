import { Container } from '@mui/material'
import React, { useState } from 'react'
import { Carrousel } from '../components/carrousel/Carrousel'
import { SearchForRoom } from '../components/search/SearchForRoom'
import { Features } from '../components/features/Features'
import { Testimonials } from '../components/testimonials/Testimonials'
import { AboutUs } from '../components/about/AboutUs'
import { Map } from '../components/map/Map'
import { RoomItemContainer } from '../components/rooms/RoomItemContainer'
import { useRoomContext } from '../context/RoomProvider'


export const Home = () => {

const { rooms, search } = useRoomContext()

  return (
    <>
      <Carrousel />
      <Features />

      <SearchForRoom search={search}/>
      <RoomItemContainer rooms={rooms}/>

      <Testimonials />
      <AboutUs />
      <Map />
    </>
  )
}
