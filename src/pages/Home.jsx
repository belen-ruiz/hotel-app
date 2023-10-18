// import { Container } from "@mui/material";
// import React, { useState } from "react";
// import { SearchForRoom } from "../components/search/SearchForRoom";
// import { Features } from "../components/features/Features";
// import { Testimonials } from "../components/testimonials/Testimonials";
// import { AboutUs } from "../components/about/AboutUs";
// import { Map } from "../components/map/Map";
// import { RoomItemContainer } from "../components/rooms/RoomItemContainer";
// import { useRoomContext } from "../context/RoomProvider";
// import { Intro } from "../components/header/Intro";
// import { Page } from "../custom/Display"

// export const Home = () => {
//     const { rooms, search } = useRoomContext();

//     return (
//         <Container sx={{ ...Page,
//          //position: "relative"
//          }}>

//             <Intro />

//             <Features />

//             <RoomItemContainer rooms={rooms} />

//             <SearchForRoom search={search} />

//             <AboutUs />

//             <Testimonials />

//         </Container>
//     );
// };

import { Container } from "@mui/material";
import React, { useState } from "react";
import { SearchForRoom } from "../components/search/SearchForRoom";
import { Features } from "../components/features/Features";
import { Testimonials } from "../components/testimonials/Testimonials";
import { AboutUs } from "../components/about/AboutUs";
import { Map } from "../components/map/Map";
import { RoomItemContainer } from "../components/rooms/RoomItemContainer";
import { useRoomContext } from "../context/RoomProvider";
import { Intro } from "../components/header/Intro";
import { MainSections } from "../custom/Display";
import { Stack } from "@mui/material";


export const Home = () => {
    const { rooms, search } = useRoomContext();

    return (
        <Container sx={{ ...MainSections }}>
            <Stack spacing={6} sx={{ width: "100%" }}>
                <Intro />

                <Features /> 

                <RoomItemContainer rooms={rooms} />

                <SearchForRoom search={search} />

                <AboutUs />

                <Testimonials />
            </Stack>
        </Container>
    );
};
