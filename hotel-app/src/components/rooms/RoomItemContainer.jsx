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
            overflowY:"scroll",
            padding: "1rem 0",
            height: "100vh",
            }}>
    
        <Box sx={{height: "fit-content",backgroundColor: "red", margin: "2rem"
}}>
        {
        rooms && rooms.map((room) => (
                room && <RoomItem rooms={room}/>
                ))
        }
        </Box>

    </Container>
  )
}
