import { useContext, useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { roomsData } from "../utils/rooms";

const RoomContext = createContext([]);
export const useRoomContext = () => useContext(RoomContext);
export const RoomProvider = ({ children }) => {

    const navigate  = useNavigate()

    const [loading, setLoading] = useState(true)

    const [rooms, setRooms] = useState([]);
    const [isList, setIsList] = useState(true)
    const [search, setSearch] = useState([]);


    const [adults, setAdults] = useState(1);
    const [kids, setKids] = useState(0);

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
    
    console.log(adults)
    console.log(kids)

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

        setTimeout(() => {
            if (totalGuests) {
                const roomsFiltered = rooms.filter((room) => 
                    totalGuests == room.capacity)
                    setSearch(roomsFiltered);
                    navigate("/rooms")
                    ;
                } 
            setLoading(false)
        }, 2000);


        
    }, [totalGuests]);

    const getAll = () => {
        setTotalGuests(0)
        setSearch([])
    }
     
    
  
    console.log(totalGuests)
    //console.log(rooms)
    console.log(search)


    return (
        <RoomContext.Provider
            value={{
                loading,
                
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
                handleClick, startDate, setStartDate, endDate,setEndDate,

                isList, setIsList, getAll
            }}
        >
            {children}
        </RoomContext.Provider>
    );
};
