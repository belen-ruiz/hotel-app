import React from "react";
import { Typography, Container, Box, Stack } from "@mui/material";
import { ContainedButton } from "../../styles/Buttons";
import { Logo } from "../logo/Logo";
import LogoIntro from "../../images/logo_aurora_white-10.png";
import { disableGutters, alignCenter } from "../../styles/Display";
import { Flip } from "react-awesome-reveal";

const bgImg =
    "https://images.pexels.com/photos/17488420/pexels-photo-17488420/free-photo-of-madera-paisaje-agua-apple.jpeg";

export const Intro = () => {
    return (
        <Container className="section alignCenter p-0" >
            {/* img */}
            <Box className="introImg">
                <img
                    src={bgImg}
                    alt="who we are"
                    className="image"
                />

                <Box className="introOverlay" ></Box>
            </Box>

            {/* text box */}
            <Stack className="introText">
                <Flip delay={1} fraction={1} duration="2000">
                    <Logo
                        logo={LogoIntro}
                        altLogo={"logo-intro"}
                        height={{ xs: "100px", md: "300px" }}
                    />
                </Flip>

                {/* contact */}
                <Flip direction="down" delay={1} duration="2000">
                    <Box  className="btn contained-btn">contact us</Box>
                </Flip>
            </Stack>
        </Container>
    );
}; 
