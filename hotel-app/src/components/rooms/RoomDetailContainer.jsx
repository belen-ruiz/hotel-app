import { Box } from '@mui/material'
import { Container } from '@mui/material'
import React from 'react'
import { useRoomContext } from '../../context/RoomProvider'
import { RoomDetail } from './RoomDetail'

export const RoomDetailContainer = ({  }) => {

    const { rooms }  =  useRoomContext()

  return (
    <Container 
        sx={{
            display:"flex",
            }}>
    
    {
        rooms && rooms.map((room) => (
                {room && <RoomDetail rooms={room}/>}
            <Box>
            </Box>
        ))
    }

    </Container>
  )
}


