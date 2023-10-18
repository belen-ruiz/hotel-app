import { Container, Box } from "@mui/material";
import { useRoomContext } from "../../../context/RoomProvider";
import { RoomItem } from "../../rooms/RoomItem";
import { WhiteButton } from "../../../custom/Buttons";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";



const Buttons = () => {
    
    const { handleScroll } = useRoomContext();

    return (
        <Box
            sx={{
                display: "flex",
                gap: "1rem",
                width: "32px",
                height: "32px",
            }}
        >
            <Box sx={{ ...WhiteButton }} onClick={() => handleScroll("left")}>
                <ArrowCircleLeftRoundedIcon fontSize="large" />
            </Box>

            <Box sx={{ ...WhiteButton }} onClick={() => handleScroll("right")}>
                <ArrowCircleRightRoundedIcon fontSize="large" />
            </Box>
        </Box>
    );
};

export const ScrollContainer = ({}) => {
    const { rooms, isList, setIsList, containerRef } = useRoomContext();

    return (
        <>
            <Container
                ref={containerRef}
                sx={{
                    overflowX: "scroll",
                    scrollBehavior: "smooth",
                    scrollSnapType: "x mandatory",
                    scrollbarWidth: "none",
                    padding: { xs: 0, md: 0, lg: 0 },
                }}
            >
                {/* item list container */}
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        gap: "1rem", 
                        position: "relative",
                    }}>
                    {/* item */}
                    {rooms &&
                        rooms.map((room) => (
                            <Box
                                key={rooms.title}
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    gap: "1rem",
                                }}>
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
