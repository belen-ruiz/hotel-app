import { useRoutes } from 'react-router-dom'
import { Error404 } from '../pages/Error404'
import { Home } from '../pages/Home'
import { Rooms } from '../pages/Rooms'
import { RoomDetails } from '../pages/RoomDetails'
import { BookNow } from '../components/modals/BookNow'
import { Contact } from '../components/modals/Contact'


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
            path:"/rooms/:room_id",
            label: "room detail",
            exact: true,
            element: <RoomDetails />
        },
        {
            path:"/home",
            label: "amenities",
            exact: true,
            element: <Home />
        },
        {
            path:"/home",
            label: "amenities",
            exact: true,
            element: <Home />
        },
        {
            path:"/home",
            label: "booking",
            exact: true,
            element: <Home />
        },
        {
            path:"/home",
            label: "booking",
            exact: true,
            element: <Home />
        },
        {
            path:"/book-now",
            label: "book-now",
            exact: true,
            element: <BookNow />
        },
        {
            path:"/contact",
            label: "contact",
            exact: true,
            element: <Contact />
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

