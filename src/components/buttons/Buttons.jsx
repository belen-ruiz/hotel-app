import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";


export const BtnOutlined = ({ link, text }) => {
    return (
        <>
            <Box>
                <Link to={`/${link}`}>
                    <Box className="btn outlined-btn">{text}</Box>
                </Link>
            </Box>
        </>
    );
};


export const BtnContained = ({ link, onClick, text }) => {
    return (
        <>
            <Box onClick={onClick}>
                <Link to={`/${link}`}>
                    <Box className="btn contained-btn">{text}</Box>
                </Link>
            </Box>
        </>
    );
};