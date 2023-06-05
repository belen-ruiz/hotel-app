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

    const getAllRooms = () => {
        setTotalGuests(0)
        setSearch([])
    }

    const handleChangeDate = (e) => {
        const id = e.currentTarget.id;
        const value = e.currentTarget.value;

        if (id === "date-start") {
            setStartDate(value);
        } else if (id === "date-end") {
            setEndDate(value);
        }
    };

    const handleSliderChange = (e, value) => {
        const id = e.target.id
        if (id === "adults") {
            setAdults(value);
        } else if (id === "kids"){
            setKids(value);
        }
    };

    const handleInputChange = (e) => {
        const id = e.target.id
        if (id === "adults") {
            setAdults(e.target.value === "" ? "" : Number(e.target.value));
        } else if (id === "kids"){
            setKids(e.target.value === "" ? "" : Number(e.target.value));
        }

    };

    const handleBlur = (e) => {
        const id = e.target.id
        if (id === "adults") {
            if (adults < 0) {
                setAdults(0);
            } else if (adults > 5) {
                setAdults(5);
            }           
        } else if (id === "kids"){
            if (kids < 0) {
                setKids(0);
            } else if (kids > 5) {
                setKids(5);
            }
        }
    };
     

    useEffect(() => {
        //initial room render       

        setTimeout(() => {            
            renderRooms()
        }, 2000);
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
    

    return (
        <RoomContext.Provider
            value={{
                loading,
                search,
                rooms,

                isList, 
                setIsList, 
                getAllRooms,
                
                handleChangeDate, handleSliderChange, handleInputChange, handleBlur, handleClick, 
                
                adults, kids, totalGuests,
                
            }}
        >
            {children}
        </RoomContext.Provider>
    );
};
