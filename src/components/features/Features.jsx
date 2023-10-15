import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Container } from "@mui/material";
import { features } from "../../utils/features";
import {
    TopText,
    Title,
    SubtitleCenter,
} from "../../custom/typography/Typography";

export const Features = () => {
    return (
        <Container
            disableGutters
            maxWidth="md"
            sx={{
                display: "flex",
                //height: "80vh",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Stack
                spacing={6}
                sx={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                }}
            >
                {/* titles */}

                <Stack
                    spacing={1}
                    sx={{
                        alignItems: "center",
                    }}
                >
                    <p style={TopText}>Enjoy all benefits while you stay</p>

                    <p style={Title}>Our services</p>

                    <p style={SubtitleCenter}>
                        Enjoy all benefits while you stay
                    </p>
                </Stack>

                {/* item box */}

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "2rem 1rem",
                    }}
                >
                    {features.map((feature) => (
                        <Box
                            key={feature.id}
                            sx={{
                                flex: "0 0 20%",
                                maxWidth: "20%",
                            }}
                        >
                            <Feature data={feature} />
                        </Box>
                    ))}
                </Box>
            </Stack>
        </Container>
    );
};

const Feature = ({ data }) => {
    const { id, icon, title, description } = data;
    return (
        <Stack
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                color: "#4f4e4e",
            }}
        >
            <Box>{icon}</Box>
            <Typography variant="subtitle2">{title}</Typography>
        </Stack>
    );
};