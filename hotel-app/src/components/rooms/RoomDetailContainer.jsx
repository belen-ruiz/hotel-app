import { Box } from '@mui/material'
import { Container } from '@mui/material'
import React from 'react'
import { useRoomContext } from '../../context/RoomProvider'
import { RoomDetail } from './RoomDetail'

export const RoomDetailContainer = ({  }) => {

    const { rooms }  =  useRoomContext()

    const roooms = rooms[0]
    console.log(roooms)
  return (

    <Container 
        sx={{
            display:"flex",
            }}>

            <Box>
                {roooms && <RoomDetail roooms={roooms}/>}
            </Box>

    </Container>
  )
}


