import React from 'react'

export const RoomDetail = ({ rooms }) => {

    const title = rooms.title
    const capacity = rooms.capacity
    const amenities = rooms.amenities
    const allows = rooms.allows
    const donts = rooms.donts
    const description = rooms.description
    const price = rooms.price
    const imgUrl = rooms.imgUrl

    console.log(rooms.title)
  return (
    <div>RoomDetail</div>
  )
}
