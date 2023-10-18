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
import { ContainedButton } from "../../custom/Buttons";

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
            <Image imgUrl={imgUrl} title={title} ratio="4/6"/>

            <Stack
                sx={{
                    opacity: 0,
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    bottom: 0,
                    padding: "1rem",
                    justifyContent: "space-between",
                    alignItems: "start",
                    transition: "0.2s ease-in",
                    "&:hover, &:focus-within": {
                        opacity: 1,
                        backdropFilter: "blur(10px)",
                    },
                }}
            >
                {/* capacidad */}
                {capacity && (
                    <Capacity capacity={capacity} style={{ ...White }} />
                )}

                {/* data */}
                <Data title={title} price={price} />
            </Stack>
        </Box>
    );
};

export const Image = ({ title, imgUrl, ratio }) => {
    return (
        <>
            <AspectRatio sx={{borderRadius: 0 }} ratio={ratio} >
                <figure>
                    <img src={imgUrl} alt={title} />
                </figure>
            </AspectRatio>
        </>
    );
};

export const Capacity = ({ capacity, style }) => {
    return (
        <>
            <Box
                title="capacity"
                sx={{
                    Maxwidth: "90%",
                    border: "1px solid white",
                    borderRadius: 0,
                    display: "flex",
                    ...style,
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

export const Data = ({ title, price }) => {
    return (
        <>
            <Box>
                <p style={{ ...CardTitle, ...Green }}>{title}</p>
            </Box>

            <Box sx={{ display: "flex", alignItems: "end" }}>
                <p style={{ ...Subtitle, ...Green, fontWeight: 700 }}>
                    $
                    <span
                        style={{ ...Price, ...Green, letterSpacing: "-20px" }}
                    >
                        {price}
                    </span>
                    pp night
                </p>
            </Box>

            <Box sx={{ width: "fit-content" }}>
                <Link to={`/room/${title}`}>
                    <Box sx={ContainedButton}>see more info </Box>
                </Link>
            </Box>
        </>
    );
};
