import { Typography } from "@mui/material";
import { Box, Toolbar, Container } from "@mui/material";
import React from "react";
import { socialmedia } from "../../../utils/socialmedia";
import { contact } from "../../../utils/contact";

export const Banner = () => {
    return (
        <Container className="banner orange-bc">
            <Box
                className="box-sb smallText green"
                sx={{
                    flexDirection: { xs: "wrap", md: "row" },
                    gap: "0.5rem",
                    minHeight: "auto",
                }}
            >
                {/* contact  */}
                {contact.map((data) => (
                    <Box className="d-center"
                        key={data.text}
                        sx={{ gap: 1 }}
                    >
                        {data.icon} <span>{data.text}</span>
                    </Box>
                ))}

                {/* social media  */}
                {socialmedia.map((data) => (
                    <Box key={data}>
                        {data}
                    </Box>
                ))}
            </Box>
        </Container>
    );
};
