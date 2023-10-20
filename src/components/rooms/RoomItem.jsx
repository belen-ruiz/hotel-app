import React from "react";

import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Favorite from "@mui/icons-material/Favorite";
import CreateNewFolder from "@mui/icons-material/CreateNewFolder";
import { BoyRounded } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { ContainedButton, OutlinedButton } from "../../custom/Buttons";

import {
    White,
    WhiteBC,
    GreenBC,
    OrangeBC,
    Orange,
    Green,
    TopText,
    Title,
    Subtitle,
    CardTitle,
    Price,
    TextAlignJustify,
    SmallText
} from "../../custom/Typography";
import { Grid } from "@mui/material";

export const RoomItem = ({ rooms }) => {
    const id = rooms.id;
    const title = rooms.title;
    const capacity = rooms.capacity;
    const price = rooms.price;
    const imgUrl = rooms.imgUrl;

    return (
        <Box
            sx={{
                width: 300,
                position: "relative",
            }}
        >
            <RoomImage imgUrl={imgUrl} title={title} ratio="4/6" />

            <Stack
                sx={{
                    opacity: 0,
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    bottom: 0,
                    padding: "1.5rem",
                    justifyContent: "space-between",
                    alignItems: "start",
                    transition: "0.2s ease-in",
                    "&:hover, &:focus-within": {
                        opacity: 1,
                        backdropFilter: "blur(10px)",
                    },
                }} >
                {/* capacidad */}
                {capacity && <RoomCapacity capacity={capacity} />}

                {/* data */}
                <RoomTitle title={title} />
                <RoomPrice price={price} />

                {/* buttons */}
                <GroupButtons id={id} />
            </Stack>
        </Box>
    );
};

///

export const RoomImage = ({ title, imgUrl, ratio }) => {
    return (
        <>
            <AspectRatio sx={{ borderRadius: 0 }} ratio={ratio}>
                <figure  style={{ height: "100%", width: "100%", overflow: "hidden",  }}>
                    <img src={imgUrl} alt={title} style={{ height: "100%", width: "100%", objectFit: "cover" }}/>
                </figure>
            </AspectRatio>
        </>
    );
};



export const RoomCapacity = ({ capacity }) => {
    return (
        <>
            <Box
                title="capacity"
                className="white green-bc"
                sx={{
                    Maxwidth: "90%",
                    border: "1px solid white",
                    borderRadius: 0,
                    display: "flex",
                }}
            >
                {Array(capacity)
                    .fill()
                    .map(() => (
                        <BoyRounded
                            key={capacity}
                            style={{ fontSize: "2rem" }}
                        />
                    ))}
            </Box>
        </>
    );
};


export const RoomAmenities = ({ amenities, amenity, displayText }) => {
  return (
    <>
      {amenity &&
        amenities &&
        amenity.map((am) => {
          if (amenities.includes(am.name)) {
            return (
              <div
              className="green"
                title={am.name}
                key={am.name}
                
              >
                {displayText ? 
                    <RoomAmenity icon={am.icon} name={am.name} />
                 : 
                 <>
                    <RoomAmenitiesIcon icon={am.icon} />
                </>}
              </div>
            );
          }
          return null;
        })}
    </>
  );
};


const RoomAmenity = ({ icon, name }) => {
    return (
        <>
            <Box sx={{display:"flex", gap:"0.7rem", width: "100%"}}>
                <p className="orange" style={{fontSize:"1rem"}}>{icon}</p> 
                <p className="smallText green">{name}</p>
            </Box>
        </>
    ); 
    };



const RoomAmenitiesIcon = ({ icon }) => {
    return (
        <>
            <p>{icon}</p>
        </>
    );
};




export const RoomTitle = ({ title }) => {
    return (
        <>
            <Box>
                <p className="cardTitle green">{title}</p>
            </Box>
        </>
    );
};

export const RoomPrice = ({ title, price }) => {
    return (
        <>
            <Box sx={{ display: "flex", alignItems: "end" }}>
                <p className="subtitle green" style={{ fontWeight: 700 }}>
                    $
                    <span className="price green"
                        style={{ letterSpacing: "-10px" }}
                    >
                        {price}
                    </span>
                    pp night
                </p>
            </Box>
        </>
    );
};

export const RoomDescription = ({ description }) => {
    return (
        <>
            <Box sx={{ display: "flex", alignItems: "end" }}>
                <p className="subtitle green">${description}</p>
            </Box>
        </>
    );
};

export const GroupButtons = ({ id }) => {
    return (
        <>
        <Box sx= {{ width: "100%", display: "flex", justifyContent: "space-between", gap: "0.7rem" }}>
                <Box sx={{ flex: 1 }}>
                    <Link to={`/rooms/${id}`}>
                        <Box className="btn contained-btn">more info </Box>
                    </Link>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Link to={`/rooms/${id}`}>
                        <Box className="btn outlined-btn">book now </Box>
                    </Link>
                </Box>
            </Box>
        </>
    );
};

