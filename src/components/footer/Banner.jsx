import { Typography } from "@mui/material";
import { Box, Toolbar, Container } from "@mui/material";
import React from "react";
import { socialmedia } from "../../utils/socialmedia";
import { fastcontact } from "../../utils/fastcontact";
import {
    White, Orange, SmallText,
    Green, GreenBC, OrangeBC,
} from "../../custom/Typography";

export const Banner = () => {
    return (
        <Container
            disableGutters
            sx={{
                zIndex: 999999,
                padding: "0.2rem 1rem",
                backgroundColor: "#b66808",
                width: "100%",
            }}
        >
            <Box
                sx={{
                    ...SmallText, ...White,
                    display: "flex",
                    flexDirection: { xs: "wrap", md: "row" },
                    gap: "0.5rem",
                    justifyContent: "space-between",
                    alignItems: "center",
                    minHeight: "auto",
                }}
            >

                {/* contact  */}
                {fastcontact.map((data) => (
                    <Box
                        key={data.text}
                        sx={{
                            //mr: 2,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            width: "100%"
                        }}
                    >
                        {data.icon}
                        <span> {data.text}</span>
                    </Box>
                ))}

                {/* social media  */}
                <Box sx={{ display: "flex", gap: "0.5rem",  width: "100%" }} >
                    {socialmedia.map((data) => (
                        <Box
                            key={data}
                            sx={{ cursor: "pointer" }}
                        >
                            {data}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    );
};
