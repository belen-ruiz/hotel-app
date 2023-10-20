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

export const FooterData = () => {
    const location = useLocation();

    return (
        <>
            <Grid
                container
                spacing={2}
                margin={0}
                padding={2}
                sx={{ width: "100%" }}
            >
                {/* col 1 */}
                <Grid item xs={6}>
                    <Grid
                        container
                        padding={0}
                        className="smallText"
                        sx={{
                            gridTemplateColumns: "repeat(3, 1fr)",
                        }}
                    >
                        {footer.map((feet) => (
                            <Grid item padding={1} xs={4} key={feet.id}>
                                <NavLink>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: "0.1rem",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box className="orange"
                                            sx={{
                                                width: "20px",
                                                height: "20px",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <ArrowForwardIosIcon fontSize="sm" />
                                        </Box>

                                        <Box className="white">
                                            {feet.title}
                                        </Box>
                                    </Box>
                                </NavLink>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                {/* col 2 */}
                <Grid
                    item
                    xs={6}
                    sx={{
                        display: { xs: "none", md: "flex" },
                        justifyContent: "end",
                        alignItems: "end",
                    }}
                >
                    <Logo
                        logo={logoWhite}
                        altLogo={"logo-footer"}
                        height={"80px"}
                    />
                </Grid>
            </Grid>
        </>
    );
};
