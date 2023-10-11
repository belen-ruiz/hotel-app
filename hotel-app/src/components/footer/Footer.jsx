import { useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { footer } from "../../utils/footer";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../logo/Logo";

export const Footer = () => {
    const location = useLocation();

    return (
        <Container  maxWidth="xl" sx={{ backgroundColor: "var(--color-primary)", padding: "3rem", marginTop: "2rem" }}>
            <Grid container spacing={2} margin={0} padding={2} >
                
                {/* col 2 */}
                <Grid item xs={6}>
                    <Grid
                        container
                        spacing={2}
                        sx={{ gridTemplateColumns: "repeat(3, 1fr)", fontSize: "0.7rem",
                        textTransform: "capitilize", }}>
                        {footer.map((feet) => (
                            <Grid item xs={4} key={feet.id}>
                                <NavLink
                                    style={{
                                        color:
                                            location.pathname === feet.title
                                                ? "var(--color-white)"
                                                : "var(--color-secondary)",
                                    }}
                                >
                                    {feet.title}
                                </NavLink>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>


                {/* col 2 */}
                <Grid item xs={6} sx={{display: "flex", justifyContent: "end", alignItems: "end"}}>
                    <Logo colorLogo={"#e8e2e2"}/>
                </Grid>
            </Grid>
        </Container>
    );
};
