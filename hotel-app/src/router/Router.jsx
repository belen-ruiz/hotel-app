import { useRoutes } from 'react-router-dom'
import { Error404 } from '../pages/Error404'
import { Home } from '../pages/Home'
import { Rooms } from '../pages/Rooms'
import { Amenities } from '../pages/Amenities'
import { Gallery } from '../pages/Gallery'
import { Contact } from '../pages/Contact'
import { Reservations } from '../pages/Reservations'
import { RoomDetails } from '../pages/RoomDetails'


export const allRoutes = () => {
    const routes = [
        {
            path:"/",
            label: "home",
            exact: true,
            element: <Home />
        },
        {
            path:"/home",
            label: "home",
            exact: true,
            element: <Home />
        },
        {
            path:"/rooms",
            label: "rooms",
            exact: true,
            element: <Rooms />
        },
        {
            path:"/room/:room_id",
            label: "room detail",
            exact: true,
            element: <RoomDetails />
        },
        {
            path:"/amenities",
            label: "amenities",
            exact: true,
            element: <Amenities />
        },
        {
            path:"/amenities",
            label: "amenities",
            exact: true,
            element: <Gallery />
        },
        {
            path:"/contact",
            label: "booking",
            exact: true,
            element: <Contact />
        },
        {
            path:"/booking",
            label: "booking",
            exact: true,
            element: <Reservations />
        },
       
        {
            path:"/*",
            exact: false,
            element: <Error404 />
        },
    ]
  return [ ...routes ]
}

export const Router = () => {
    const appRoutes = allRoutes()
    return useRoutes(appRoutes);
}

