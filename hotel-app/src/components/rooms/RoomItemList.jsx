
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
import { confort } from "../../utils/confort";


import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import { Container } from "@mui/material";

export const RoomItemList = ({ rooms, isList, setIsList }) => {
    const title = rooms.title;
    const capacity = rooms.capacity;
    const amenities = rooms.amenities;
    const allows = rooms.allows;
    const donts = rooms.donts;
    const description = rooms.description;
    const price = rooms.price;
    const imgUrl = rooms.imgUrl;

    //const [isList, setIsList] = useState(true)

    return (
        <Container sx={{height:"fit-content" }}>
            <Link to={`/room/${title}`} sx={{height: "fit-content"}}>
                <Card
                    sx={{
                        width: "fit-cotent",
                        boxShadow: "none",
                        "--Card-padding": "0px",
                        margin: "1rem 0",
                        transition: "all .4s ease-out",
                        "&:hover":{ 
                            transform: "translateY(-5%)" }
                        
                    }}>
            
                    <Box sx={{ 
                             }}>
            
                        <Card
                            sx={{
                                backgroundColor:"rgb(247, 245, 245)",
            
                            }}
                            >
                            {/* The first box acts as a container that inherits style from the CardCover */}
                            <Box sx={{display:"flex", 
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: isList? "row" : "column", 
                                    width: isList? "100%" : "min-content"
                                }}>
                                {/* IMAGEN */}
                                <Box>
                                    <AspectRatio ratio="4/3" sx={{width: 250}}>
                                            <figure >
                                                <img  src={imgUrl} loading="lazy" alt={title} />
                                            </figure>
                                    </AspectRatio>
                                </Box>
            
            
                                {/* TEXT Y RESERV */}
                                <Box sx={{
                                        display: "flex", 
                                        flexDirection: isList? "row" : "column",
                                        gap: "1rem", 
                                        paddingLeft: isList && "1rem"}}>
                                    {/* TEXT */}
                                    <Stack
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "1rem",
                                            alignSelf: "start",
                                        }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: "grey",
                                                alignSelf: "",
                                                padding: "",
                                                fontWeight: "bold",
                                                letterSpacing: 1,
                                            }}
                                        >
                                            {title}
                                        </Typography>
                                    
                                        <Chip
                                            variant="outlined"
                                            color="neutral"
                                            size="sm"
                                            sx={{
                                                borderRadius: "sm",
                                                display: "flex",
                                                width: "fit-content"
                                            }}
                                        >
                                            {capacity && (
                                                <div title={`Room for ${capacity} people`}>
                                                    {Array(capacity)
                                                        .fill()
                                                        .map((_, index) => (
                                                            <BoyRounded
                                                                key={index}
                                                                style={{
                                                                    color: "grey",
                                                                }}
                                                            />
                                                        ))}
                                                </div>
                                            )}
                                            
                                        </Chip>
            
            
                                        { isList &&
                                        <Typography
                                            sx={{
                                                color: "grey",
                                                fontSize: "0.8rem"
                                                
                                            }}
                                        >
                                            {description}
                                        </Typography>
                                        }
            
            
            
                                        <Box sx={{display: "flex", gap:"1rem"}}>
                            {confort && amenities &&
                                confort.map((service) => {
                                    if (amenities.includes(service.name)) {
                                        return (
                                            <div title={service.name} key={service.name} style={{
                                                color: "grey",
                                            }}>
                                                {service.icon }
                                            </div>
                                        );
                                    }
                                })}
                        </Box>
                                    
                                    </Stack>
                                    
            
            
                                    
                                    {/* PRICE Y RESERVATION */}
                                    <Stack sx={{ 
                                            display: "flex",
                                            flexDirection: isList?"column" : "row",
                                            justifyContent: "space-between",
                                            alignItems: isList? "center" : "start",
                                            justifySelf: "end",
                                            padding: isList && "1rem",
                                            gap: !isList && "1rem" 
                                            }}>
                                        <Typography
                                            sx={{ fontSize: "3rem", color: "grey",
                                        }}
                                        >
                                            ${price}
                                        </Typography>
                                            <FormHelperText
                                                sx={{ color: "grey"}}
                                            >
                                                p p night
                                            </FormHelperText>
                                    
                                    
                                        <Button variant="contained" color="primary" sx={{alignSelf: isList? "end" : "start", }}>
                                            RESERVATION
                                        </Button>
                                    </Stack>
                                </Box>
                            </Box>
                        </Card>
                    </Box>
                </Card>
            </Link>
        </Container>
    );
};





// <Box sx={{ ml: "auto" }}>
//                                     <IconButton size="sm" color="neutral">
//                                         <Favorite />
//                                     </IconButton>

//                                     <IconButton
//                                         size="sm"
//                                         color="neutral"
//                                         sx={{ ml: "0.5rem" }}
//                                     >
//                                         <CreateNewFolder />
//                                     </IconButton>
//                                 </Box>


