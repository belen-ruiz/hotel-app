import React from 'react'
import { RoomItemContainer } from '../components/rooms/RoomItemContainer'
import { useRoomContext } from '../context/RoomProvider'

export const Rooms = () => {
  const { rooms }  =  useRoomContext()

  return (
    <div>Rooms

      <RoomItemContainer data={rooms}/>
    </div>
  )
}
