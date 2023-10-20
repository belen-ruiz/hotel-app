import React from "react";
import { Typography, Container, Box, Stack } from "@mui/material";
import { ContainedButton } from "../../custom/Buttons";
import { Logo } from "../logo/Logo";
import LogoIntro from "../../images/logo_aurora_white-10.png";
import { disableGutters, alignCenter } from "../../custom/Display";
import { Flip } from "react-awesome-reveal";

const bgImg =
    "https://images.pexels.com/photos/17488420/pexels-photo-17488420/free-photo-of-madera-paisaje-agua-apple.jpeg";

export const Intro = () => {
    return (
        <Container className="alignCenter"
            sx={{ position: "relative" }}
        >
            {/* img */}
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    maxHeight: "500px",
                    overflow: "hidden",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <img
                    src={bgImg}
                    alt="who we are"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />

                <Box
                    sx={{
                        backgroundColor: "rgba(66,59,16,.6)",
                        zIndex: 2,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        content: '"  "',
                    }}
                ></Box>
            </Box>

            {/* text box */}
            <Stack
                sx={{
                    display: "flex",
                    width: "100%",
                    height: "auto",
                    top: "30%",
                    position: "absolute",
                    zIndex: 3,
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0,8rem",
                }}
            >
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
