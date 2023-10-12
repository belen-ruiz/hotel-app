import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Container } from "@mui/material";
import { features } from "../../utils/features";
import {
    TopText,
    Title,
    Quote,
    SubtitleBold,
    SubtitleItalic,
} from "../../custom/typography/Typography";

export const Testimonials = () => {
    return (
        <Container
            sx={{
                display: "flex",
                //height: "80vh",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Stack
                spacing={1}
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
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <p style={TopText}>TESTIMONIALS</p>
                    <p style={Title}>What our clients say</p>
                </Stack>

                {/* tripAd quote */}
                <Stack
                    spacing={1}
                    sx={{
                        display: "flex",
                        width: "80%",
                        alignItems: "center",
                    }}
                >
                    <p style={Quote}>
                        "My stay was simply amazing and exceeded all my
                        expectations. The room, elegantly decorated, offered
                        breathtaking views and exceptional comfort. The pool,
                        located right by the shore, was an oasis of relaxation.
                        The staff, friendly, attentive, and helpful at all
                        times, made every effort to provide me with an
                        unforgettable experience. I would highly recommend this
                        hotel without hesitation for a dream vacation by the
                        beach!"
                    </p>
                    <p style={SubtitleBold}>Bruce Wayne</p>
                    <p style={SubtitleItalic}>Reviewed from TripAdvisor</p>
                    <img
                        src="https://download.logo.wine/logo/TripAdvisor/TripAdvisor-Logo.wine.png"
                        alt="trip advisor"
                        style={{ width: "150px" }}
                    />
                </Stack>
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
            <Typography
                sx={{
                    textAlign: "center",
                }}
                variant="caption"
            >
                {description}
            </Typography>
        </Stack>
    );
};
