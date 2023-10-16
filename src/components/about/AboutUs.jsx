import { Button } from "@mui/material";
import { Grid, Container, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Sections } from "../../custom/Display";
import {
    White,
    WhiteBC,
    GreenBC,
    Orange,
    TopText,
    Title,
    Subtitle,
    TextAlignJustify,
    Bold,
    Italic,
} from "../../custom/Typography";

export const AboutUs = () => {
    return (
        <Container
            disableGutters
            maxWidth="lg"
            sx={{ ...Sections, ...GreenBC }}
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
                <Stack spacing={"1rem"} sx={{ width: "30%", alignItems: "start" }}>
                    <Stack>
                        <p style={{ ...TopText, ...WhiteBC }}>a little about us</p>
                        <p style={{ ...Title, ...White }}>
                            the Best place to enjoy life
                        </p>
                    </Stack>

                    <Stack sx={{ width: "100%", alignItems: "start", gap: "1rem" }}>
                        <p style={{ ...Subtitle, ...White, ...TextAlignJustify }}>
                            the Best place to enjoy life place to enjoy life place
                            to enjoy life place to enjoy life place to enjoy life
                            place to enjoy life place to enjoy lifnjoy life place to enjoy lif njoy life place to enjoy lif njoy life place to enjoy lif e place to enjoy
                            life place to enjoy life.
                        </p>
                        <p style={{ ...Subtitle, ...Orange, ...Bold }}> FRANCO MOLINA
                        </p>
                        <p style={{ ...Subtitle, ...White, ...Italic }}>CEO of Las Salinas</p>
                    </Stack>
                </Stack>

                {/* img */}
                <Box sx={{ display: "flex", width: "70%" }}>
                    <img
                        src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&dpr=1"
                        alt="who we are"
                        style={{ width: "100%", objectFit: "cover" }}
                    />
                </Box>
            </Box>
        </Container>
    );
};
