import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Container } from "@mui/material";
import { features } from "../../utils/features";

export const Testimonials = () => {
    return (
        <Container
            sx={{
                display: "flex",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Stack
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                }}
            >
                <p className="subtitle">TESTIMONIALS</p>
                <p className="title">What our clients say</p>

                <Stack
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem"

                    }}
                >
                    <p className="parraph quote">
                        "loem cndufciw hi fqhi dhihqi xnjak JKDPOED djadbab,
                        djoqof jdiqdj. joqfkcpjq, joqfnwfjop. oqeiqoeio
                        dnihawhfqi jcnjebfuhi snhh jsp ps sjo psps. joqfkcpjq, joqfnwfjop. oqeiqoeio
                        dnihawhfqi jcnjebfuhi snhh jsp ps sjo psps. joqfkcpjq, joqfnwfjop. oqeiqoeio
                        dnihawhfqi jcnjebfuhi snhh jsp ps sjo psps."
                    </p>
                    <p className="parraph">
                        Bruce Wayne
                    </p>
                    <p className="parraph">
                        Reviewed from TripAdvisor
                    </p>
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
