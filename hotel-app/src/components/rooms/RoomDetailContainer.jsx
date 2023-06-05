import { RoomServiceTwoTone } from '@mui/icons-material'
import { Box } from '@mui/material'
import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRoomContext } from '../../context/RoomProvider'
import { RoomDetail } from './RoomDetail'
import { Hero } from "../hero/Hero"

export const RoomDetailContainer = ({  }) => {
  
  const { rooms }  =  useRoomContext()
  const [room, setRoom] = useState([])
  const { room_id } = useParams()

  const fecthRoom = () => {
    const findRoom = rooms.find((room) => (
      room.title == room_id
      ))
    setRoom(findRoom)
  }

    useEffect(() => {
        fecthRoom()
    }, [room_id])
    

  return (

    <Container 
        sx={{
            padding: "3rem"
            }}>
                          

                {rooms && <RoomDetail room={room}/>}
    </Container>
  )
}


