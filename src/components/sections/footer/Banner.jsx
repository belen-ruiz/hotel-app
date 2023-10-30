import { Box, Container } from "@mui/material";
import React from "react";
import { Facebook, Google, Instagram, LinkedIn, LocationOnRounded, Pinterest, Twitter, WhatsApp } from '@mui/icons-material';

//contact
const contact = [
    {
        icon: <LocationOnRounded className="fs-1"/>,
        text: "Av. Siempreviva 123, Springfield. 90210, Michigan, EEUU"
    },
    {
        icon: <WhatsApp className="fs-1"/>,
        text: "00800-555-3467"
    },

];


//media
export const socialmedia = [
    <Facebook className="fs-1" />,
    <Twitter className="fs-1" />,
    <Google className="fs-1" />,
    <Instagram className="fs-1" />,
    <Pinterest className="fs-1" />,
    <LinkedIn className="fs-1" />,
];


export const Banner = () => {
    return (
        <Container className="btn-box orange-bc">
            <Box
                className="box-sb block-font green"
                sx={{
                    flexDirection: { xs: "wrap", md: "row" },
                    gap: "0.5rem",
                    minHeight: "auto",
                }}
            >
                {/* contact  */}
                {contact.map((data) => (
                    <Box className="a-center"
                        key={data.text}
                        sx={{ gap: 1 }}
                    >
                        {data.icon} <span>{data.text}</span>
                    </Box>
                ))}

                {/* social media  */}
                {socialmedia.map((data) => (
                    <Box key={data} className="fs-1">
                        {data}
                    </Box>
                ))}
            </Box>
        </Container>
    );
};
