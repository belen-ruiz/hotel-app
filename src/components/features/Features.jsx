import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Container } from "@mui/material";
import { features } from "../../utils/features";
import { Sections } from "../../custom/Display";
import {
    White, WhiteBC,
    Green, GreenBC, OrangeBC,
    TopText,
    Title,
    Subtitle,
} from "../../custom/Typography";

export const Features = () => {
    return (
        <Container
            disableGutters
            maxWidth="lg"
            sx={{ ...Sections, ...GreenBC }}
        >
            <Stack
                spacing={6}
                sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    //height: "75vh",
                }}
            >
                {/* titles */}

                <Stack
                    spacing={1}
                    sx={{
                        alignItems: "center",
                    }}
                >
                    <p style={{ ...TopText }}>Enjoy all benefits while you stay</p>

                    <p style={{...Title, ...White}}>Our services</p>

                    <p style={{...Subtitle, ...White}}>
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
                color: {...White},
            }}
        >
            <Box>{icon}</Box>
            <Typography variant="subtitle2">{title}</Typography>
        </Stack>
    );
};
