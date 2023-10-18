import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
//import logo from "../../images/logo_iso.png";

export const Logo = ({ logo, altLogo, height }) => {

    return (
        <>
            <Box>
                <Link to="/home">
                    <img src={logo} alt={altLogo} height={height} />
                </Link>
            </Box>
        </>
    );
};
