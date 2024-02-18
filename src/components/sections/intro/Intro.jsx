import React from "react";
import LogoIntro from "../../../images/logo_aurora_white-10.png";
import { Typography, Container, Box, Stack } from "@mui/material";
import { Logo } from "../../logo/Logo";
import { Flip } from "react-awesome-reveal";
import { BtnOutlined } from "../../buttons/Buttons";

const bgImg =
    "https://images.pexels.com/photos/17488420/pexels-photo-17488420/free-photo-of-madera-paisaje-agua-apple.jpeg";

export const Intro = () => {
    const bigScreen = window.innerWidth > 600;

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

            {/* text box & contact */}

            <Stack className="text-intro">
                {bigScreen ? (
                        <>
                            <Flip>
                                <Logo
                            logo={LogoIntro}
                            altLogo={"logo-intro"}
                            height={{ xs: "100px" }}/>
                            </Flip>
                                
                            <Flip duration={3000} >
                                <BtnOutlined link="contact" text="contact us" />
                            </Flip >
                        </>
                    ) 
                    :
                    (
                        <>
                            <Logo
                            logo={LogoIntro}
                            altLogo={"logo-intro"}
                            height={{ md: "300px" }}/>
                            
                            <BtnOutlined link="contact" text="contact us" />
                        </>
                    )
                }

                
            </Stack>
        </Container>
    );
}; 
