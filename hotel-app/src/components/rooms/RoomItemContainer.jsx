import { Stack } from '@mui/material'
import { Container } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import { useRoomContext } from '../../context/RoomProvider'
import { RoomItem } from './RoomItem'


export const RoomItemContainer = ({ search }) => {


    const { rooms }  =  useRoomContext()

console.log(search.length)

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
        search.length > 0 && search.map((room) => (
                room && <RoomItem rooms={room}/>
                ))
        ||
        
        rooms && rooms.map((room) => (
                room && <RoomItem rooms={room}/> 
                ))
        }
        </Box>

    </Container>
  )
}
