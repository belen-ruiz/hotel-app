import { Stack } from '@mui/material'
import { Container } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import { useRoomContext } from '../../context/RoomProvider'
import { RoomItemList } from './RoomItemList'


export const RoomItemListContainer = ({isList, setIsList}) => {


    const { rooms }  =  useRoomContext()


   return (
    <Container 
        sx={{
            display:"flex",
            flexDirection: isList? "column" : "row",
            flexWrap: !isList && "wrap",
            backgroundColor:"grey",
            widht: "fit-content",

            }}>
    
    {
        rooms && rooms.map((room) => (
            <Box>
                {room && <RoomItemList isList={isList} setIsList={setIsList} rooms={room}/>}
            </Box>
        ))
    }

    </Container>
  )
}
