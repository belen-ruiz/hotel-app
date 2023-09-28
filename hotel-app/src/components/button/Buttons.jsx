import React from "react";
import Button from "@mui/material/Button";

export const Buttons = ({ data }) => {
    return (
        <Button
            variant="contained"
            sx={{
                my: 2,
                backgroundColor: "var--(color-highlight)",
                display: "block",
                color: "var--(color-white)",
            }}
            onClick={() => {
                alert("clicked");
            }}
        >
            {data}
        </Button>
    );
};
