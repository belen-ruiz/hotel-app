// import React, { useState } from "react";

// import AspectRatio from "@mui/joy/AspectRatio";
// import Avatar from "@mui/joy/Avatar";
// import Box from "@mui/joy/Box";
// import Card from "@mui/joy/Card";
// import CardCover from "@mui/joy/CardCover";
// import Chip from "@mui/joy/Chip";
// import IconButton from "@mui/joy/IconButton";
// import Typography from "@mui/joy/Typography";
// import Favorite from "@mui/icons-material/Favorite";
// import CreateNewFolder from "@mui/icons-material/CreateNewFolder";
// import { BoyRounded } from "@mui/icons-material";
// import { Button } from "@mui/material";
// import { Stack } from "@mui/material";
// import FormHelperText from "@mui/material/FormHelperText";
// import { Link } from "react-router-dom";
// import { comfort } from "../../utils/comfort";

// import Divider from "@mui/joy/Divider";
// import { Container } from "@mui/material";
// import {
//     ContainedButton,
//     OutlinedButton,
// } from "../../custom/Buttons";
// import { Image } from "./RoomItem";

// export const RoomItemList = ({ rooms, isList, setIsList }) => {
//     const title = rooms.title;
//     const capacity = rooms.capacity;
//     //const amenities = rooms.amenities;
//     const amenities = rooms.amenities.slice(0, 4);
//     const allows = rooms.allows;
//     const donts = rooms.donts;
//     const description = rooms.description;
//     const price = rooms.price;
//     const imgUrl = rooms.imgUrl;

   
//     return (
//         <Card
//             sx={{
//                 width: isList ? "fit-content" : "300px",
//                 //boxShadow: "none",
//                 height: "fit-content",
//                 backgroundColor: "rgb(247, 245, 245)",
//                 "--Card-padding": "0px",
//                 transition: "all .4s ease-out",
//                 "&:hover": {
//                     transform: "translateY(-5%)",
//                 },
//             }}
//         >
//             <Box
//                 sx={{
//                     display: "flex",
//                     //justifyContent: "center",
//                     flexDirection: isList ? "row" : "column",
//                     alignItems: "space-between",
//                     width: "100%",
//                 }}
//             >
//                 {/* image */}
//                 <Box sx={{ flex: 1 }}>
//                     <Image imgUrl={imgUrl} title={title} ratio="4/3" />
//                 </Box> 

//                 {/* data */}
//                 <Stack
//                     sx={{
//                         display: "flex",
//                         gap: "0.5rem",
//                         //width: "50%",
//                         padding: "1rem",
//                         justifySelf: "start",
//                         flex: 2
//                     }}
//                 >
//                     {/* title */}
//                     <Typography
//                         variant="h6"
//                         sx={{
//                             color: "grey",
//                             alignSelf: "",
//                             padding: "",
//                             fontWeight: "bold",
//                             letterSpacing: 1,
//                         }}
//                     >
//                         {title}
//                     </Typography>

//                     {/* capacity & amenities */}
//                     <Box
//                         sx={{
//                             display: "flex",
//                             gap: "0.5rem",
//                             alignItems: "center",
//                         }}
//                     >
//                         {/* capacity */}
                        
//                         <Chip
//                             size="sm"
//                             sx={{
//                                 borderRadius: "sm",
//                                 display: "flex",
//                                 backgroundColor: "green",
//                             }}
//                         >
//                             {capacity && (
//                                 <div title={`Room for ${capacity} people`}>
//                                     {Array(capacity)
//                                         .fill()
//                                         .map((_, index) => (
//                                             <BoyRounded
//                                                 key={index}
//                                                 style={{
//                                                     color: "#f7f0f0",
//                                                 }}
//                                             />
//                                         ))}
//                                 </div>
//                             )}
//                         </Chip>

//                         <Divider orientation="vertical" flexItem />

//                         {/* amenities */}
//                         <Box sx={{ display: "flex", gap: "0.5rem" }}>
//                             {comfort &&
//                                 amenities &&
//                                 comfort.map((amenity) => {
//                                     if (amenities.includes(amenity.name)) {
//                                         return (
//                                             <div
//                                                 title={amenity.name}
//                                                 key={amenity.name}
//                                                 style={{
//                                                     color: "rgb(38, 37, 38)",
//                                                 }}
//                                             >
//                                                 {amenity.icon}
//                                             </div>
//                                         );
//                                     }
//                                 })}
//                         </Box>
//                     </Box>

//                     {/* descrip */}
//                     <Typography
//                         sx={{
//                             color: "grey",
//                             fontSize: "0.8rem",
//                             width: isList ? "70%" : "100%",
//                         }}
//                     >
//                         {description}
//                     </Typography>
//                 </Stack>

//                 {/* dividers */}
//                 {isList ? 
//                 <Divider orientation="vertical" flexItem />
//                 :
//                 <Divider flexItem />
//                 }

//                 {/* price & book */}
//                 <Stack
//                     sx={{
//                         display: "flex",
//                         width: "100%",
//                         flexDirection: "column",
//                         justifyContent: "space-between",
//                         alignItems: "start",
//                         padding: "1rem",
//                         flex: isList && 1,
//                         //justifySelf: "end",
//                         //gap: !isList && "1rem",
//                     }}
//                 >
//                     {/* price */}
//                     <p sx={{ fontSize: "3rem", color: "grey" }}>
//                         ${price} <FormHelperText sx={{ color: "grey" }}>
//                         price per night
//                     </FormHelperText>
//                     </p>
                    

//                     {/* buttons */}
//                     <Box sx={{ display: "flex", gap: "1.5rem", justifyContent: "space-between" }}>
//                         <Link to={`/room/${title}`}>
//                             <Box sx={OutlinedButton}>BOOK NOW</Box>
//                         </Link>

//                         <Link to={`/room/${title}`}>
//                             <Box sx={ContainedButton}>MORE INFO</Box>
//                         </Link>
//                     </Box>
//                 </Stack>
//             </Box>
//         </Card>
//     );
// };
import React, { useState } from "react";

import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Chip from "@mui/joy/Chip";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Favorite from "@mui/icons-material/Favorite";
import CreateNewFolder from "@mui/icons-material/CreateNewFolder";
import { BoyRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import { Link } from "react-router-dom";
import { comfort } from "../../utils/comfort";

import Divider from "@mui/joy/Divider";
import { Container } from "@mui/material";
import {
    ContainedButton,
    OutlinedButton,
} from "../../custom/Buttons";
import { Green, WhiteBC } from "../../custom/Typography"
import { RoomCapacity, RoomImage, RoomDescription, RoomPrice, RoomTitle, RoomAmenities, GroupButtons } from "./RoomItem";

export const RoomItemList = ({ rooms, isList, setIsList }) => {
    const title = rooms.title;
    const capacity = rooms.capacity;
    //const amenities = rooms.amenities;
    const amenities = rooms.amenities.slice(0, 4);
    const allows = rooms.allows;
    const donts = rooms.donts;
    const description = rooms.description;
    const price = rooms.price;
    const imgUrl = rooms.imgUrl;

   
    return (
        <Card
            sx={{
                ...WhiteBC,
                width: isList ? "fit-content" : "300px",
                height: "fit-content",
                maxHeight: "max-content",
                overflow: "hidden",
                borderRadius: 0,                
                "--Card-padding": "0px",
                transition: "all .4s ease-out",
                "&:hover": {
                    transform: "translateY(-5%)",
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    //justifyContent: "center",
                    flexDirection: isList ? "row" : "column",
                    alignItems: "space-between",
                    width: "100%",
                    height: "100%"
                }}
            >
                {/* image */}
                <Box sx={{ flex: 1, height: "100%" }}>
                    <RoomImage imgUrl={imgUrl} title={title} ratio="3/5" />
                </Box> 

                {/* data */}
                <Stack
                    sx={{
                        display: "flex",
                        gap: "0.5rem",
                        //width: "50%",
                        padding: "1rem",
                        justifySelf: "start",
                        flex: 2
                    }}
                >
                    {/* title */}
                    <RoomTitle title={title} />

                    {/* capacity & amenities */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: "0.5rem",
                            alignItems: "center",
                        }}
                    >
                        
                        <RoomCapacity capacity={capacity} />

                        <Divider orientation="vertical" flexItem />

                        <RoomAmenities amenities={amenities} comfort={comfort} />
                        
                    </Box>

                    {/* descrip */}
                    <RoomDescription description={description}/>
                </Stack>


                {isList ? 
                <Divider orientation="vertical" flexItem />
                :
                <Divider flexItem />
                }

                {/* price & book */}
                <Stack
                    sx={{
                        display: "flex",
                        width: "100%",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        //alignItems: "start",
                        padding: "1rem",
                        flex: isList && 1,
                        //justifySelf: "end",
                        //gap: !isList && "1rem",
                    }}
                >
                    <RoomPrice price={price} title={title} />
                    <GroupButtons title={title}/>
                </Stack>
            </Box>
        </Card>
    );
};
