import { Box, Stack } from '@mui/material'
import React from 'react'
import { useRoomContext } from '../context/RoomProvider'
import AspectRatio from "@mui/joy/AspectRatio";
import { RoomDetailContainer } from '../components/rooms/RoomDetailContainer';


export const RoomDetails = () => {

  return (
    <div>
        
       <RoomDetailContainer />

    </div>
  )
}
