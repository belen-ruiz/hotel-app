import React from "react";

import { Typography, Container, Box, Stack } from "@mui/material";
import { ContainedButton } from "../buttons/CustomButton";


const bgImg =
    "https://images.pexels.com/photos/17488420/pexels-photo-17488420/free-photo-of-madera-paisaje-agua-apple.jpeg";

export const Intro = () => {
    return (
        <Container
        maxWidth="none"
            sx={{
                padding: { xs: 0, md: 0 },
                display: "grid",
                width: "100vw",
                height: "100vh",
                position: "relative",
                }}>

            {/* img */}
            <Box
                sx={{
                    overflow: "hidden",
                    position: "absolute",
                    height: "100%",
                    width: "100%"}}>
                <img
                    src={bgImg}
                    alt="imgHotel"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    // sx={{
                    //     top: "0",
                    // }}
                />
            </Box>


            {/* text box */}
            
            <Stack
                sx={{
                    width: "100%",
                            top: "50%",
                            display: "flex",
                            //left: "1rem",
                            position: "absolute",

                        //height: "33vh",
                        zIndex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0,8rem",
                    color: "white",
                }}>
                <Typography variant="h3">AURORA MONTAIN </Typography>
                <Typography variant="subtitle2">É muito fácil revelar na FotoRegistro! As fotos podem ser enviadas tanto do seu celular quanto do computador. Faça login no site, escolha suas fotos e receba em casa. </Typography>

                {/* contact */}
                <Box sx={ContainedButton} >
                        contact us
                </Box>
                
            </Stack>
        </Container>
    );
};
