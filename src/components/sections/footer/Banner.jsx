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
            <Box
                className="btn-box green orange-bc p-05">
                {/* contact  */}
                {contact.map((data) => (
                    <Box className="d-flex block-font"
                        key={data.text}  >
                        {data.icon} <span>{data.text}</span>
                    </Box>
                ))} 

                {/* social media  */}
                <Box className="item-databox" >
                    {socialmedia.map((data) => (
                        <Box key={data}>
                            {data}
                        </Box>
                    ))}
                </Box>
            </Box>
    );
};
