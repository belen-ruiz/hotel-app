import React from 'react'
import { RoomItemListContainer } from '../components/rooms/RoomItemListContainer'
import { useRoomContext } from '../context/RoomProvider'

export const Rooms = () => {

  return (
    <div>Rooms

      <RoomItemListContainer />
    </div>
  )
}
