import { Button } from "@mui/material";
import { Grid, Container, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import {
    TopText,
    Title,
    SubtitleJustify,
    SubtitleBold,
    SubtitleItalic,
} from "../../custom/typography/Typography";

export const AboutUs = () => {
    return (
        <Container
            sx={{
                display: "flex",
                //height: "80vh",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    gap: "1rem",
                    //height: "80%",
                }}
            >
                {/* titles */}

                <Stack 
                    spacing={1} 
                    sx={{ width: "30%",                         alignItems: "start",
                }}>
                    <p style={TopText}> a little about us </p>
                    <p style={Title}>the Best place to enjoy life </p>
                    <p style={SubtitleJustify}>
                        the Best place to enjoy life place to enjoy life place
                        to enjoy life place to enjoy life place to enjoy life
                        place to enjoy life place to enjoy life place to enjoy
                        life place to enjoy life.
                    </p>
                    <p style={SubtitleBold}> FRANCO MOLINA </p>
                    <p style={SubtitleItalic}> CEO of Las Salinas </p>
                </Stack>

                {/* img */}

                <Box sx={{ display: "flex", width: "70%" }}>
                    <img
                        src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&dpr=1"
                        alt="who we are"
                        style={{ width: "100%", objectFit:"cover" }}
                    />
                </Box>
            </Box>
        </Container>
    );
};
