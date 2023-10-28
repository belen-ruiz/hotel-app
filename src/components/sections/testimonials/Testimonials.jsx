import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Container } from "@mui/material";
import { Zoom, Fade } from "react-awesome-reveal";
import { Titles } from "../../titles/Titles";

 

export const Testimonials = () => {

    const topText = "What our clients say"
    const title = "Testimonials"
    const subtitle = "Enjoy all benefits while you stay"

    return (
        <Container className="section a-center white-bc">
            <Stack spacing={2} className="section a-center container-web p-lg">
                {/* titles */}
                <Titles 
                    topText={topText}
                    title={title} 
                    subtitle={subtitle}/>


                {/* tripAd quote */}
                <Stack
                    spacing={1}
                    className="a-center"
                    sx={{
                        display: "flex",
                        width: "80%",
                    }}
                >
                    <p className="quote green">
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
                    <p className="subtitle bold">Bruce Wayne</p>
                    <p className="subtitle italic">
                        Reviewed from TripAdvisor
                    </p>
                    <Fade direction="up" delay={1} duration="2000">
                        <img
                            src="https://download.logo.wine/logo/TripAdvisor/TripAdvisor-Logo.wine.png"
                            alt="trip advisor"
                            style={{ width: "150px" }}
                        />
                    </Fade>
                </Stack>
            </Stack>
        </Container>
    );
}; 
