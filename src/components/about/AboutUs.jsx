import { Button } from "@mui/material";
import { Grid, Container, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { TopText, Title, SubtitleJustify, SubtitleBold, SubtitleItalic } from "../../custom/typography/Typography"


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
            <Box sx={{ display: "flex", width: "100%", gap: "1rem", height: "80%" }}>
                <Stack spacing={1} sx={{ width: "30%" }}>
                    <p style={ TopText } > a little about us </p>
                    <p style={ Title }>the Best place to enjoy life </p>
                    <p style={ SubtitleJustify }>
                        the Best place to enjoy life place to enjoy life place
                        to enjoy life place to enjoy life place to enjoy life
                        place to enjoy life place to enjoy life place to enjoy
                        life place to enjoy life.
                    </p>
                    <p style={ SubtitleBold }> FRANCO MOLINA </p>
                    <p style={ SubtitleItalic }> CEO of Las Salinas </p>
                </Stack>

                <Box sx={{ display: "flex", width: "70%"}}>
                    <img
                        src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="who we are"
                        style={{ height: "100%", width: "100%" }}
                    />
                </Box>
            </Box>
        </Container>
    );
};
