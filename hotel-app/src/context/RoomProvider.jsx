import { useContext, useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import { roomsData } from "../utils/rooms";

const RoomContext = createContext([]);
export const useRoomContext = () => useContext(RoomContext);
export const RoomProvider = ({ children }) => {

    const [rooms, setRooms] = useState(roomsData);
    const [adults, setAdults] = useState(2);
    const [kids, setKids] = useState(1);

    const [totalGuests, setTotalGuests] = useState(0);
    const [totalDate, setTotalDate] = useState();
    const [totalSelect, setTotalSelect] = useState([]);

    const total = adults + kids;
    

    const handleClick = () => {
        setTotalSelect([[totalGuests], [totalDate]]);            
    };

    useEffect(() => {
        setTotalGuests(total);
    }, [total]);

    useEffect(() => {
        if (totalGuests) {
            const roomsFiltered = roomsData.filter((room) => {
                return room.capacity >= totalGuests;
            });
            setRooms(roomsFiltered);
        }
    }, [totalGuests]);


    console.log(rooms)
    console.log(totalGuests)


    useEffect(() => {
        setTimeout(() => {}, 1000);
    }, []);

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

                totalDate,
                setTotalDate,
                handleClick,
            }}
        >
            {children}
        </RoomContext.Provider>
    );
};
