import React from 'react'
import { RoomItemContainer } from '../components/rooms/RoomItemContainer'
import { useRoomContext } from '../context/RoomProvider'

export const Rooms = () => {

  return (
    <div>Rooms

      <RoomItemContainer />
    </div>
  )
}
