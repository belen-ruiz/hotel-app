import { useContext, useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import { roomsData } from "../utils/rooms";

const RoomContext = createContext([]);
export const useRoomContext = () => useContext(RoomContext);
export const RoomProvider = ({ children }) => {

    const [rooms, setRooms] = useState(roomsData);

    const [adults, setAdults] = useState(2);
    const [kids, setKids] = useState(1);

    const [startDate, setStartDate] = useState(false);
    const [endDate, setEndDate] = useState(false);

    const [totalGuests, setTotalGuests] = useState(0);
    const [totalDate, setTotalDate] = useState();
    const [totalSelect, setTotalSelect] = useState([]);

    const total = adults + kids;
    const day = startDate.$W // mal
    const number = startDate.$D
    const month = startDate.$M //mal
    const year = startDate.$y
    const dayNumberMonthYear =  [`${day} - ${number} / ${month} / ${year}`]
    

    const handleClick = () => {
        setTotalGuests(total);

        //setTotalSelect([[totalGuests], [totalDate]]);       okkkk     
    };


    // useEffect(() => {
    //   setTotalDate(dayNumberMonthYear) 
    // }, [startDate])

  
    useEffect(() => {
        //guest render
        if (totalGuests) {
            const roomsFiltered = roomsData.filter((room) => 
                totalGuests == room.capacity)
                setRooms(roomsFiltered);
            ;
        }
    }, [totalGuests]);
    
    console.log(totalGuests)
    console.log(rooms)


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
                handleClick, startDate, setStartDate, endDate,setEndDate
            }}
        >
            {children}
        </RoomContext.Provider>
    );
};
