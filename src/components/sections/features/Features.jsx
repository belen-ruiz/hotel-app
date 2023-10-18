import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Container } from "@mui/material";
import { features } from "../../../utils/features";
import { alignCenter } from "../../../custom/Display";
import { Flip } from "react-awesome-reveal";

import {
    White,
    WhiteBC,
    Green,
    GreenBC,
    OrangeBC,
    TopText,
    Title,
    Subtitle,
    TextAlignCenter,
    MenuWeb,
} from "../../../custom/Typography";

const Feature = ({ data }) => {
    const { id, icon, title } = data;
    return (
        <Stack
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                color: { ...White },
            }}
        >
            <Box>{icon}</Box>
            <p style={{ ...MenuWeb, ...White, ...TextAlignCenter }}>{title}</p>
        </Stack>
    );
}; 

export const Features = () => {
    return (
        <Container sx={{ ...alignCenter, ...GreenBC }}>
            <Stack spacing={4} sx={{ ...alignCenter }}>
                {/* titles */}
                <Stack
                    spacing={1}
                    sx={{ ...alignCenter, padding: "2rem 0" }}
                >
                    <p style={{ ...TopText, ...TextAlignCenter }}>
                        Enjoy all benefits while you stay
                    </p>

                    <p style={{ ...Title, ...White }}>Our services</p>

                    <p style={{ ...Subtitle, ...White }}>
                        Enjoy all benefits while you stay
                    </p>
                </Stack>

                {/* item box */}

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            gap: "5rem",
                            width: "70%",
                            maxWidth: "700px",
                        }}
                        >
                        <Flip cascade damping={0.1}>
                        {features.map((feature) => (
                            <Box
                                key={feature.id}
                                sx={{
                                    flex: "0 0 20%",
                                }}
                            >
                                    <Feature data={feature} />
                            </Box>
                        ))}
                        </Flip>
                    </Box>
            </Stack>
        </Container>
    );
};