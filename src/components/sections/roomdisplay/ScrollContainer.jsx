// import { Container, Stack, Box } from "@mui/material";
// import { useRoomContext } from "../../../context/RoomProvider";
// import { RoomItem } from "../../rooms/RoomItem";
// import { ArrowButton } from "../../../styles/Buttons";
// import { Zoom, Fade } from "react-awesome-reveal";
// import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
// import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";



// const Buttons = () => {
    
//     const { handleScroll } = useRoomContext();

//     return (
//         <Box className="d-flex"
//             sx={{
//                 width: "32px",
//                 height: "32px",
//             }}
//         >
//             <Box className="arrow-btn" onClick={() => handleScroll("left")}>
//                 <Zoom duration={2000} delay={2} >
//                     <ArrowCircleLeftRoundedIcon fontSize="large" />
//                 </Zoom>
//             </Box>

//             <Box className="arrow-btn" onClick={() => handleScroll("right")}>
//                 <Zoom duration={2000} delay={4}>
//                     <ArrowCircleRightRoundedIcon fontSize="large" />
//                 </Zoom>
//             </Box>
//         </Box>
//     );
// };

// export const ScrollContainer = ({}) => {
//     const { rooms, isList, setIsList, containerRef } = useRoomContext();

//     return (
//         <>
//             <Container
//                 ref={containerRef}
//                 className="scrollable-container" >
            
//                     {/* item list container */}
//                     <Box className="item-listContainer">
//                         {/* item */}
//                         {rooms &&
//                             rooms.map((room) => (
//                                 <Box
//                                     key={rooms.title}
//                                     className="d-flex">
//                                     {room && (
//                                         <RoomItem
//                                             isList={isList}
//                                             setIsList={setIsList}
//                                             rooms={room}
//                                         />
//                                     )}
//                                 </Box>
//                         ))}
//                     </Box>            
                    
//             </Container>
            
//             {/* buttons */}
//             <Buttons />

//         </>
//     );
// };


import { Container, Box } from "@mui/material";
import { useRoomContext } from "../../../context/RoomProvider";
import { RoomItem } from "../../rooms/RoomItem";
import { Zoom, Fade } from "react-awesome-reveal";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";



const Buttons = () => {
    
    const { handleScroll } = useRoomContext();

    return (
        <Box className="arrow-box">
            <Box className="arrow-btn" onClick={() => handleScroll("left")}>
                <Zoom duration={1000} delay={1} >
                    <ArrowCircleLeftRoundedIcon fontSize="large" />
                </Zoom>
            </Box>

            <Box className="arrow-btn" onClick={() => handleScroll("right")}>
                <Zoom duration={3000} delay={4}>
                    <ArrowCircleRightRoundedIcon fontSize="large" />
                </Zoom>
            </Box>
        </Box>
    );
};

export const ScrollContainer = ({}) => {
    const { rooms, isList, setIsList, containerRef } = useRoomContext();

    return (
        <>
            <Container
                ref={containerRef} className="scrollable-container" >
                {/* item list container */}
                <Box className="item-listContainer">
                    {/* item */}
                    {rooms &&
                        rooms.map((room) => (
                            <Box
                                key={rooms.title}
                                className="d-flex">
                                {room && (
                                    <RoomItem
                                        isList={isList}
                                        setIsList={setIsList}
                                        rooms={room}
                                    />
                                )}
                            </Box>
                    ))}
                </Box>
            </Container>

            {/* buttons */}
            <Buttons />
        </>
    );
};

