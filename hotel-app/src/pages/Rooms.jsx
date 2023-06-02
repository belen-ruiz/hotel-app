import { Typography } from '@mui/material'
import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { RoomItemContainer } from '../components/rooms/RoomItemContainer'
import { RoomItemGridContainer } from '../components/rooms/RoomItemGridContainer'
import { RoomItemListContainer } from '../components/rooms/RoomItemListContainer'
import { SearchForRoom } from '../components/search/SearchForRoom'
import { useRoomContext } from '../context/RoomProvider'
import { FilterIcons } from '../filter/FilterIcons'

export const Rooms = () => {

  const [select, setSelect] = useState('list'); 
  const { search, setIsList, totalGuests } = useRoomContext()

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
      <SearchForRoom  search={search}
/>
      <FilterIcons setSelect={setSelect} select={select} />

      {/* {view} */}
      {totalGuests > 0 && (
      <Typography>
                              Showing results for Rooms for {totalGuests}
                              people
                          </Typography>)}

        
      <RoomItemListContainer />
    </Container>
  )
}