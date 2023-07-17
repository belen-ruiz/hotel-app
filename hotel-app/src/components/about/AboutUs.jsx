import { Button } from "@mui/material";
import { Container, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const AboutUs = () => {
    return (
        <Container
            sx={{
                display: "flex",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box className="display-grid">
                <Stack
                    sx={{
                        gridColumn: { xs: "1 / span 3", md: "1 / span 3" },
                        gap: 4,
                    }}
                >
                    <p className="subtitle"> a little about us </p>
                    <p className="title"> the Best place to enjoy life </p>
                    <p className="parraph">
                        the Best place to enjoy life place to enjoy life place
                        to enjoy life place to enjoy life place to enjoy life
                        place to enjoy life place to enjoy life place to enjoy
                        life place to enjoy life.
                    </p>
                    <p className="parraph"> FRANCO MOLINA </p>
                    <p className="parraph"> CEO of Las Salinas </p>

                </Stack>

                <Box
                    sx={{
                        gridColumn: { xs: "4 / span 5", md: "4 / span 5" },
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="who we are"
                    />
                </Box>
            </Box>
        </Container>
    );
};
