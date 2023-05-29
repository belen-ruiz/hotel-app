import { Stack } from '@mui/material'
import { Container } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import { useRoomContext } from '../../context/RoomProvider'
import { RoomItemList } from './RoomItemList'


export const RoomItemListContainer = () => {


    const { rooms }  =  useRoomContext()


   return (
    <Container 
        sx={{
            display:"flex",
            flexDirection: "column"
            }}>
    
    {
        rooms && rooms.map((room) => (
            <Box>
                {room && <RoomItemList rooms={room}/>}
            </Box>
        ))
    }

    </Container>
  )
}
