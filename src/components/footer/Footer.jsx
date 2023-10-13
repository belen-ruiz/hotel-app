import { useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { footer } from "../../utils/footer";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../logo/Logo";
import { Banner } from "../banner/Banner";
import { Stack } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const Footer = () => {
    const location = useLocation();

    return (
        <Container
            disableGutters
            maxWidth="lg"
            sx={{
                width: "100%",
                display: "flex",
                marginTop: "2rem",
                justifyContent: "center",
                alignContent: "end",
                backgroundColor: "var(--color-primary)",
            }}
        >
            <Stack sx={{ width:"inherit" }}>
                <Grid
                    container
                    spacing={2}
                    margin={0}
                    padding={2}
                    sx={{ width: "100%" }}
                >
                    {/* col 2 */}
                    <Grid item xs={6}>
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                gridTemplateColumns: "repeat(3, 1fr)",
                                fontSize: "0.7rem",
                                textTransform: "capitilize",
                            }}
                        >
                            {footer.map((feet) => (
                                <Grid 
                                item 
                                xs={4} 
                                key={feet.id}>
                                    <NavLink
                                        // style={{
                                        //     color:
                                        //         location.pathname === feet.title
                                        //             ? "var(--color-white)"
                                        //             : "var(--color-secondary)",
                                        // }}
                                    >
                                        <Box sx={{display: "flex", gap: "0.1rem", alignItems: "center"}} >
                                            <Box sx={{width: "20px", height: "20px"}} >
                                                <ArrowForwardIosIcon fontSize="sm" />
                                            </Box> 
                                            <Box sx={{
                                            color:
                                                location.pathname === feet.title
                                                    ? "var(--color-white)"
                                                    : "var(--color-secondary)",
                                        }}>
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
                            display: "flex",
                            justifyContent: "end",
                            alignItems: "end",
                        }}
                    >
                        <Logo colorLogo={"#e8e2e2"} />
                    </Grid>
                </Grid>

                <Banner />
            </Stack>
        </Container>
    );
};
