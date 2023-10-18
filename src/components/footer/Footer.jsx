import { useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { footer } from "../../utils/footer";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../logo/Logo";
import { Banner } from "./Banner";
import { Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import logoWhite from "../../images/logo_aurora_white-09.png";
import {
    White,
    Orange,
    Green,
    GreenBC,
    OrangeBC,
    SmallText,
} from "../../custom/Typography";
import { FooterData } from "./FooterData";
import { MainSections } from "../../custom/Display";

export const Footer = () => {
    const location = useLocation();

    return (
        <Container sx={{ ...MainSections }}>
            <Stack sx={{ width: "100%" }}>
                {/* info */}
                <FooterData />

                {/* banner */}
                <Banner />
            </Stack>
        </Container>
    );
};
