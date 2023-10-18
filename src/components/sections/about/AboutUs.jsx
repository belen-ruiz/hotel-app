import { Container, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { alignCenter, alignStart } from "../../../custom/Display";
import {
    White,
    WhiteBC,
    GreenBC,
    Orange,
    OrangeBC,
    TopText,
    Title,
    Subtitle,
    TextAlignJustify,
    Bold,
    Italic,
} from "../../../custom/Typography";

export const AboutUs = () => {
    return (
        <Container
            sx={{ ...alignCenter, ...GreenBC }}>
            <Box
                sx={{ ...alignStart,     
                    flexDirection: { xs: "column", md: "row" },
                }}>
                {/* titles & data */}
                <Stack spacing={1}  sx={{ width: { xs: "100%", md: "30%" },
                    }}
                >
                    <Stack>
                        <p style={{ ...TopText }}>a little about us</p>
                        <p style={{ ...Title, ...White }}>
                            the Best place to enjoy life
                        </p>
                    </Stack>

                    <Stack
                        sx={{
                            width: "100%",
                            alignItems: "start",
                            gap: "1rem",
                        }}
                    >
                        <p
                            style={{
                                ...Subtitle,
                                ...White,
                                ...TextAlignJustify,
                            }}
                        >
                            the Best place to enjoy life place to enjoy life
                            place to enjoy life place to enjoy life place to
                            enjoy life place to enjoy life place to enjoy
                            lifnjoy life place to enjoy lif njoy life place to
                            enjoy lif njoy life place to enjoy lif e place to
                            enjoy life place to enjoy life.
                        </p>
                        <p style={{ ...Subtitle, ...Orange, ...Bold }}>
                            FRANCO MOLINA
                        </p>
                        <p style={{ ...Subtitle, ...White, ...Italic }}>
                            CEO of Las Salinas
                        </p>
                    </Stack>
                </Stack>

                {/* img */}
                <Box sx={{ 
                    width: { xs: "100%", md: "70%" },
                }}>
                    <img
                        src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&dpr=1"
                        alt="who we are"
                        style={{ width: "100%", objectFit: "cover" }}
                    />
                </Box>
            </Box>
        </Container>
    );
};
