import { RoomServiceTwoTone } from '@mui/icons-material'
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Container, Stack } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useRoomContext } from '../../context/RoomProvider'
import { RoomDetail } from './RoomDetail'
import { RoomGallery } from './RoomGallery'
import { Zoom, Fade } from "react-awesome-reveal";

export const RoomDetailContainer = ({  }) => {
  
  const { room_id } = useParams()
  const { rooms }  =  useRoomContext()
  const [ room, setRoom ] = useState([])

  const fecthRoom = () => {
    const findRoom = rooms.find((room) => (
      room.id == room_id
      ))
    setRoom(findRoom)
  }

  useEffect(() => {
        fecthRoom()
  }, [room_id])
    

  return (

    <Container className="white"
        sx={ { padding: "2rem" }}>                       
          <Stack spacing={6} >
            <RoomDetail room={room}/>
            
            <RoomGallery room={room}/>
          </Stack>
    </Container>
  )
}


