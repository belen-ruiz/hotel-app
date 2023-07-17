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
            <Box>
                <Grid container spacing={4}>
                    <Grid item xs={4}>
                            <Stack
                            sx={{
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
                            <p className="parraph bold"> FRANCO MOLINA </p>
                            <p className="parraph italic"> CEO of Las Salinas </p>
                        </Stack>
                    </Grid>
                    <Grid item xs={8}>
                        <Box>
                        <img
                            src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="who we are"
                            style={{height:"100%", width: "100%"}}
                        />
                    </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};
