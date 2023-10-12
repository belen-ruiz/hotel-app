import { Typography } from "@mui/material";
import { Box, Toolbar, Container } from "@mui/material";
import React from "react";
import { socialmedia } from "../../utils/socialmedia";
import { fastcontact } from "../../utils/fastcontact";

export const Banner = () => {
    return (
        <Container
        disableGutters
            sx={{
                zIndex: 999999,
                padding: "0.2rem 1rem",
                backgroundColor: "#b66808",
                width: "100%",
            }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    minHeight: "auto",
                    padding: "0.5rem 0",
                    color: "var(--color-white)",

                }}>
                {fastcontact.map((data) => (
                    <Box
                        key={data.text}
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            textDecoration: "underline",
                            alignItems: "center",
                            gap: 1,
                        }}>
                        {data.icon}
                        <Typography variant="caption">{data.text}</Typography>
                    </Box>
                ))}

                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        gap: 1,
                    }}
                >
                    {socialmedia.map((icon) => icon)}
                </Box>
            </Box>
        </Container>
    );
};
