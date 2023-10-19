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
    Green,
    TopText,
    Title,
    Subtitle,
    CardTitle,
    Price,
    TextAlignJustify,
} from "../../custom/Typography";

export const RoomItem = ({ rooms }) => {
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

                <GroupButtons title={title} />
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
                sx={{
                    Maxwidth: "90%",
                    border: "1px solid white",
                    backgroundColor: { ...GreenBC },
                    color: { ...White },
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


export const RoomAmenities = ({ amenities, comfort, displayText }) => {
  return (
    <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      {comfort &&
        amenities &&
        comfort.map((amenity) => {
          if (amenities.includes(amenity.name)) {
            return (
              <div
                title={amenity.name}
                key={amenity.name}
                style={{
                  ...Green,
                }}
              >
                {displayText ? 
                    <RoomAmenity icon={amenity.icon} name={amenity.name} />
                 : 
                 <>
                    <RoomAmenitiesIcon icon={amenity.icon} />
                </>}
              </div>
            );
          }
          return null;
        })}
    </Box>
  );
};


const RoomAmenity = ({ icon, name }) => {
    return (
        <>
            <p>{icon}</p>
            <p>{name}</p>
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
                <p style={{ ...CardTitle, ...Green }}>{title}</p>
            </Box>
        </>
    );
};

export const RoomPrice = ({ title, price }) => {
    return (
        <>
            <Box sx={{ display: "flex", alignItems: "end" }}>
                <p style={{ ...Subtitle, ...Green, fontWeight: 700 }}>
                    $
                    <span
                        style={{ ...Price, ...Green, letterSpacing: "-10px" }}
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
                <p style={{ ...Subtitle, ...Green }}>${description}</p>
            </Box>
        </>
    );
};

export const GroupButtons = ({ title }) => {
    return (
        <>
        <Box sx= {{ width: "100%", display: "flex", justifyContent: "space-between", gap: "0.7rem" }}>
                <Box sx={{ flex: 1 }}>
                    <Link to={`/room/${title}`}>
                        <Box sx={ContainedButton}>more info </Box>
                    </Link>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Link to={`/room/${title}`}>
                        <Box sx={OutlinedButton}>book now </Box>
                    </Link>
                </Box>
            </Box>
        </>
    );
};

