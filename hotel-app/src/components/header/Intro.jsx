import React from "react";

import { Typography, Container, Box } from "@mui/material";

const bgImg =
    "https://images.pexels.com/photos/6129991/pexels-photo-6129991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export const Intro = () => {
    return (
        <Container
            sx={{
                padding: { xs: 0, md: 0 },
                display: "grid",
                position: "relative",
                }}>

            {/* img */}
            <Box
                sx={{
                    overflow: "hidden",
                    position: "absolute",
                    height: "100vh",
                    width: "100%"}}>
                <img
                    src={bgImg}
                    alt="imgHotel"
                    // sx={{
                    //     top: "0",
                    // }}
                />
            </Box>

            {/* text box */}
            <Box
                sx={{
                    height: "33vh",
                    width: "50%",
                    zIndex: 1,
                    position: "absolute",
                    top: 100,
                    left: 250,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    gap: "0,8rem",
                    color: "white",
                }}>
                <Typography variant="h3">AURORA MONTAIN </Typography>
                <Typography variant="subtitle2">É muito fácil revelar na FotoRegistro! As fotos podem ser enviadas tanto do seu celular quanto do computador. Faça login no site, escolha suas fotos e receba em casa. </Typography>
                <Typography variant="subtitle1">Your favorite choice </Typography>
            </Box>
        </Container>
    );
};
