import { useContext, useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import { roomsData } from "../utils/rooms"

const RoomContext = createContext([]);
export const useRoomContext = () => useContext(RoomContext);
export const RoomProvider = ({ children }) => {
  const { room_id } = useParams()

    const [rooms, setRooms] = useState(roomsData)
    const [adults, setAdults] = useState(2);
    const [kids, setKids] = useState(1);
    const [totalGuests, setTotalGuests] = useState();

    const handleClick = () => {
        const total = adults + kids;
        setTotalGuests(total);

        const roomsFiltered = roomsData.filter((room) => {
            return totalGuests <= room.capacity;
        })

        setRooms(roomsFiltered)
    };
      
    useEffect(() => {
      setTimeout(() => {

    }, 1000);
    }, [])
    

    return (
        <RoomContext.Provider
            value={{
                rooms,
                setRooms,
                adults,
                setAdults,
                kids,
                setKids,
                totalGuests,
                setTotalGuests,

                handleClick,
            
            }}
        >
            {children}
        </RoomContext.Provider>
    );
};