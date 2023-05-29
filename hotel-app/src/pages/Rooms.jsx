import React, { useEffect, useState } from 'react'
import { RoomItemListContainer } from '../components/rooms/RoomItemListContainer'
import { useRoomContext } from '../context/RoomProvider'
import { FilterIcons } from '../filter/FilterIcons'

export const Rooms = () => {

  const [select, setSelect] = useState('list');
  const [view, setView] = useState()
  
  useEffect(() => {
    if (select === 'list') {
      console.log(select);
      setView(<RoomItemListContainer />);
    } else {
      setView( <div>GRIDDDDDD</div> );
    }
  }, [select]);
  
  
  return (
    <div>Rooms
      <FilterIcons setSelect={setSelect} select={select} />
      
      {view}
    </div>
  )
}