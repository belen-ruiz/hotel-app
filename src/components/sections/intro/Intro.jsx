import React from "react";
import { Typography, Container, Box, Stack } from "@mui/material";
import { Logo } from "../../logo/Logo";
import LogoIntro from "../../../images/logo_aurora_white-10.png";
import { Flip } from "react-awesome-reveal";
import { BtnOutlined } from "../../buttons/Buttons";

const bgImg =
    "https://images.pexels.com/photos/17488420/pexels-photo-17488420/free-photo-of-madera-paisaje-agua-apple.jpeg";

export const Intro = () => {
    return (
        <Container className="section-container a-center p-0">
            {/* img */}
            <Box className="img-intro">
                <img
                    src={bgImg}
                    alt="who we are"
                    className="image"
                />

                <Box className="overlay-intro" ></Box>
            </Box>

            {/* text box */}
            <Stack className="text-intro">
                <Flip delay={1} fraction={1} duration="2000">
                    <Logo
                        logo={LogoIntro}
                        altLogo={"logo-intro"}
                        height={{ xs: "100px", md: "300px" }}
                    />
                </Flip>

                {/* contact */}
                <Flip direction="down" delay={1} duration="2000">
                    <BtnOutlined link="contact" text="contact us" />
                </Flip>
            </Stack>
        </Container>
    );
}; 
