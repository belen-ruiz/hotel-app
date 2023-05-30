import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { RoomItemGridContainer } from '../components/rooms/RoomItemGridContainer'
import { RoomItemListContainer } from '../components/rooms/RoomItemListContainer'
import { SearchForRoom } from '../components/search/SearchForRoom'
import { useRoomContext } from '../context/RoomProvider'
import { FilterIcons } from '../filter/FilterIcons'

export const Rooms = () => {

  const [select, setSelect] = useState('list');
  const [view, setView] = useState()
  
  const [isList, setIsList] = useState(true)


  useEffect(() => {
    if (select === 'list') {
      setIsList(true);
    } else {
      setIsList(false);
    }
  }, [select]);
  
  
  return (
    <Container >
      Rooms
      <SearchForRoom />
      <FilterIcons setSelect={setSelect} select={select} />

      {view}

      <RoomItemListContainer isList={isList} setIsList={setIsList} />
    </Container>
  )
}