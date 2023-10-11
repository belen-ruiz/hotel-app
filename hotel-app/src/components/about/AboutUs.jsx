import { Button } from "@mui/material";
import { Grid, Container, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const AboutUs = () => {
    return (
        <Container
            sx={{
                display: "flex",
                height: "80vh",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box sx={{ display: "flex", width: "100%", gap: "1rem", height: "80%" }}>
                <Stack spacing={1} sx={{ width: "30%" }}>
                    <p className="subtitle secondary"> a little about us </p>
                    <p className="title primary">
                        {" "}
                        the Best place to enjoy life{" "}
                    </p>
                    <p className="parraph primary">
                        the Best place to enjoy life place to enjoy life place
                        to enjoy life place to enjoy life place to enjoy life
                        place to enjoy life place to enjoy life place to enjoy
                        life place to enjoy life.
                    </p>
                    <p className="parraph bold"> FRANCO MOLINA </p>
                    <p className="parraph italic"> CEO of Las Salinas </p>
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
