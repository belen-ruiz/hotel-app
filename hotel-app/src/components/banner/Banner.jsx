import { Typography } from "@mui/material";
import { Box, Toolbar, Container } from "@mui/material";
import React from "react";
import { socialmedia } from "../../utils/socialmedia";
import { fastcontact } from "../../utils/fastcontact";

export const Banner = () => {
    return (
        <Container
            maxWidth="inherit"
            sx={{ background: "#fff", zIndex: 999999, padding: "0.1rem 0",                     backgroundColor: "var(--color-secondary-light)",
          }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    minHeight: "auto",
                    padding: "0.5rem 0",
                }}>
                    
                {fastcontact.map((data) => (
                    <Box
                        key={data.text}
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            color: "var(--color-primary)",
                            textDecoration: "underline",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        {data.icon}
                        <Typography variant="caption">{data.text}</Typography>
                    </Box>
                ))}

                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        color: "var(--color-primary)",
                        gap: 1,
                    }}
                >
                    {socialmedia.map((icon) => icon)}
                </Box>
            </Box>
        </Container>
    );
};
