import React from 'react'
import { useRoomContext } from '../../context/RoomProvider'
import { RoomItem } from './RoomItem'


export const RoomItemContainer = ({data}) => {


    console.log(data)

    

  return (
    <>
    
    {
        data && data.map((room) => (
            <div>
                {room && <RoomItem data={room}/>}
            </div>
        ))
    }
    
    </>
  )
}
