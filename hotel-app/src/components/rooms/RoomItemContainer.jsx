import { Stack } from '@mui/material'
import { Container } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import { useRoomContext } from '../../context/RoomProvider'
import { RoomItem } from './RoomItem'


export const RoomItemContainer = () => {


    const { rooms }  =  useRoomContext()


   return (
    <Container 
        sx={{
            display:"flex",
            overflowY:"scroll"
            }}>
    
    {
        rooms && rooms.map((room) => (
            <Box>
                {room && <RoomItem rooms={room}/>}
            </Box>
        ))
    }

    </Container>
  )
}
