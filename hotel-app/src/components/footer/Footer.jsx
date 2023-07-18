import { useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { footer } from "../../utils/footer";
import { Link, NavLink } from "react-router-dom";

export const Footer = () => {
    const location = useLocation();

    return (
        <Container sx={{ backgroundColor: "var(--color-primary)", padding: "2rem" }}>
            <Grid container spacing={2}>
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

                <Grid item xs={6}>
                    fsfsf
                </Grid>
            </Grid>
        </Container>
    );
};
