import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Carrousel } from '../components/carrousel/Carrousel'
import { SearchForRoom } from '../components/search/SearchForRoom'
import { Features } from '../components/features/Features'
import { Testimonials } from '../components/testimonials/Testimonials'
import { AboutUs } from '../components/about/AboutUs'
import { Map } from '../components/map/Map'
import { RoomItemContainer } from '../components/rooms/RoomItemContainer'
import { useRoomContext } from '../context/RoomProvider'


export const Home = () => {

const { rooms, renderRooms, search, setLoading } = useRoomContext()

useEffect(() => {
  //initial room render       
  setTimeout(() => {     
      console.log("renderroom home")       
      renderRooms()
      setLoading(false)
  }, 2000);
}, [])


  return (
    <Container sx={{display: "flex", flexDirection:"column",
    alignItems:"center",
    paddingLeft: { xs: 0, md: 0 },
    paddingRight: { xs: 0, md: 0 },
  }}>
      <Carrousel />
      <Features />

      <SearchForRoom search={search}/>
      <RoomItemContainer rooms={rooms}/>

      <Testimonials />
      <AboutUs />
      <Map />
    </Container>
  )
}
