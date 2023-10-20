import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import Container from "@mui/material/Container";
import { footer } from "../../utils/footer";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../logo/Logo";
import { Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import logoWhite from "../../images/logo_aurora_white-09.png";


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
                                    <Box className="alignCenter"
                                        sx={{ gap: "0.1rem" }}
                                    >
                                        <Box className="orange alignCenter"
                                            sx={{
                                                width: "20px",
                                                height: "20px",
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
                    className="contentEnd"
                    item
                    xs={6}
                    sx={{ display: { xs: "none", md: "flex" } }}
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
