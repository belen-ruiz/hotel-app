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
    White, WhiteBC, GreenBC, OrangeBC, Green,
    TopText,
    Title,
    Subtitle, CardTitle, Price,
    TextAlignJustify, 
} from "../../custom/Typography";

export const RoomItem = ({ rooms }) => {
    const title = rooms.title;
    const capacity = rooms.capacity;
    const amenities = rooms.amenities;
    const allows = rooms.allows;
    const donts = rooms.donts;
    const description = rooms.description;
    const price = rooms.price;
    const imgUrl = rooms.imgUrl;

    return (
        <Box
            sx={{
                width: 300,
                position: "relative",
            }}
        >
            <AspectRatio ratio="3/4" sx={{  }}>
                <figure>
                    <img src={imgUrl} loading="lazy" alt={title} />
                </figure>
            </AspectRatio>

            <Stack
                sx={{
                    width: "100%",
                    height: "100%",
                    position: "absolute", 
                    bottom: 0,
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    transition: "0.2s ease-in",
                    opacity: 0,
                    //background: "linear-gradient(0deg, #676768db 0%, #f5f6f6b4 100%);",
                    "&:hover, &:focus-within": {
                        opacity: 1,
                        backdropFilter: "blur(8px)",
                    },
                }}
            >
                {/* capacidad */}
                {capacity && (
                    <Box
                        sx={{
                            border: "1px solid white",
                            borderRadius: 0,
                            display: "flex",
                        }}
                    >
                        {Array(capacity)
                            .fill()
                            .map((_, index) => (
                                <BoyRounded
                                    key={capacity}
                                    style={{
                                        color: "var(--color-white)",
                                        fontSize: "2rem",
                                    }}
                                />
                            ))}
                    </Box>
                )}

                {/* data */}
                <Stack>
                    <p style={{ ...CardTitle, ...Green }}>{title}</p>

                    <Box sx={{ display: "flex", alignItems: "end" }} >
                        {/* <p style={{ ...Price, ...White, letterSpacing: "-20px" }}> <span style={{ ...Subtitle, ...White }}>$</span> {price}  <span style={{ ...Subtitle, ...White }}> p p night</span> </p> */}
                       <p style={{ ...Subtitle, ...Green, fontWeight: 700 }}>
                        $
                            <span style={{ ...Price, ...Green, letterSpacing: "-20px" }}> {price} </span>
                        pp night
                       </p>
                    </Box>

                    <Box sx={{}}>
                        <Link to={`/room/${title}`}>
                            <Box sx={ContainedButton}>see more info </Box>
                        </Link>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
};
