import React from 'react'
import { RoomItemListContainer } from '../components/rooms/RoomItemListContainer'
import { useRoomContext } from '../context/RoomProvider'
import { FilterIcons } from '../filter/FilterIcons'

export const Rooms = () => {

  return (
    <div>Rooms
      <FilterIcons />
      <RoomItemListContainer />
    </div>
  )
}
