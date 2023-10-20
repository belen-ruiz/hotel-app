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
            className="white"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
            }}
        >
            <Box>{icon}</Box>
            <p className="menuWeb white textAlignCenter">{title}</p>
        </Stack>
    );
};

export const Features = () => {
    return (
        <Container className="section alignCenter green-bc">
            <Stack spacing={4} className="section alignCenter">
                {/* titles */}
                <Stack
                    spacing={1}
                    className="section alignCenter"
                    sx={{ padding: "2rem 0" }}
                >
                    <p className="topText textAlignCenter">
                        Enjoy all benefits while you stay
                    </p>

                    <p className="title white">Our services</p>

                    <p className="subtitle white">
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
