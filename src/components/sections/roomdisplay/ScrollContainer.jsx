import { Container, Box } from "@mui/material";
import { useRoomContext } from "../../../context/RoomProvider";
import { RoomItem } from "../../rooms/RoomItem";
import { Zoom, Fade } from "react-awesome-reveal";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";



const BtnScrollContainer = () => {
    
    const { handleScroll } = useRoomContext();

    return (
        <Box className="arrow-box">
            <Box className="arrow-btn" onClick={() => handleScroll("left")}>
                <Zoom duration={1000} delay={1} >
                    <ArrowCircleLeftRoundedIcon className="fs-3" />
                </Zoom>
            </Box>

            <Box className="arrow-btn" onClick={() => handleScroll("right")}>
                <Zoom duration={1000} delay={2}>
                    <ArrowCircleRightRoundedIcon className="fs-3" />
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
                {/* item container */}
                <Box className="item-scroll">
                    {/* item */}
                    {rooms &&
                        rooms.map((room) => (
                            <Box
                                key={rooms.title}
                                className="d-flex g-sm">
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
            <BtnScrollContainer />
        </>
    );
};

