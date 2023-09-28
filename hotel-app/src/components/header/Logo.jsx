import { Box, Typography } from "@mui/material";
import React from "react";

export const Logo = ({colorLogo}) => {

    //const colotLogo = #1c1c1c

    return (
        <Typography
            sx={{
              fontFamily: "EB Garamond, serif",       
              fontWeight: 700,
              fontSize: "1.5rem",
              //color: "#1c1c1c",
              color: colorLogo,
            }}
        >
            Las Salinas
        </Typography>
    );
};
