import { useContext, useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { roomsData } from "../utils/rooms";

const RoomContext = createContext([]);
export const useRoomContext = () => useContext(RoomContext);
export const RoomProvider = ({ children }) => {

    const navigate  = useNavigate()

    const [rooms, setRooms] = useState([]);
    const [search, setSearch] = useState([]);

    const [adults, setAdults] = useState(1);
    const [kids, setKids] = useState(0);

    const [startDate, setStartDate] = useState(false);
    const [endDate, setEndDate] = useState(false);

    const [totalGuests, setTotalGuests] = useState(1);
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

    const renderRooms = () => {
        setRooms(roomsData)
    }
    // useEffect(() => {
    //   setTotalDate(dayNumberMonthYear) 
    // }, [startDate])

    useEffect(() => {

        setTimeout(() => {
            
            renderRooms()
        }, 1000);
    }, [])
  
    useEffect(() => {
        //guest render
        if (totalGuests) {
            const roomsFiltered = rooms.filter((room) => 
                totalGuests == room.capacity)
                setSearch(roomsFiltered);
                navigate("/rooms")
                ;
            } 
        
    }, [totalGuests]);
    
    


    console.log(totalGuests)
    console.log(rooms)
    console.log(search)


    return (
        <RoomContext.Provider
            value={{
                search,
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
