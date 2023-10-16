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
import {
    White, Orange,
    Green, GreenBC, OrangeBC,  SmallText,
} from "../../custom/Typography";

export const Footer = () => {
    const location = useLocation();

    return (
        <Container
            disableGutters
            maxWidth="lg"
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignContent: "end",
                backgroundColor: "var(--color-primary)",
            }}
        >
            <Stack sx={{ width:"inherit" }}>

                {/* info */}
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
                            sx={{
                                ...SmallText,
                                gridTemplateColumns: "repeat(3, 1fr)",
                            }}
                        >
                            {footer.map((feet) => (
                                <Grid 
                                item 
                                padding={1}
                                xs={4} 
                                key={feet.id}>
                                    <NavLink>
                                        <Box sx={{display: "flex", gap: "0.1rem", alignItems: "center"}} >
                                            <Box sx={{...Orange, width: "20px", height: "20px", display: "flex", alignItems: "center" }} >
                                                <ArrowForwardIosIcon fontSize="sm" />
                                            </Box> 

                                            <Box sx={{ ...White }}>
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

                {/* banner */}
                <Banner />
            </Stack>
        </Container>
    );
};
