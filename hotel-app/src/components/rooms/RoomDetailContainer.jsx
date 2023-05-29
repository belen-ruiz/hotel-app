import { RoomServiceTwoTone } from '@mui/icons-material'
import { Box } from '@mui/material'
import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRoomContext } from '../../context/RoomProvider'
import { RoomDetail } from './RoomDetail'

export const RoomDetailContainer = ({  }) => {
  
  const { rooms }  =  useRoomContext()
  const [room, setRoom] = useState([])
  const { room_id } = useParams()

  const fecthRoom = () => {
    const findRoom = rooms.find((room) => (room.title == room_id))
    setRoom(findRoom)
  }

  console.log(room)

    useEffect(() => {
        fecthRoom()
    }, [room_id])
    

  return (

    <Container 
        sx={{
            display:"flex",
            padding: "3rem"
            }}>
                {rooms && <RoomDetail room={room}/>}
    </Container>
  )
}


