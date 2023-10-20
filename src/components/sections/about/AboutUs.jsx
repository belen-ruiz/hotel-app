import { Container, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom"; 
import ReactPlayer from 'react-player'


const Video = () => {
    const url = "https://www.youtube.com/watch?v=VupspyQYYdY"
    return (
        <Box className="image" >
            <ReactPlayer 
            title="hotel tour video"
            url={ url }
            muted
            width='100%'>
            </ReactPlayer>
        </Box>
 )
}

export const AboutUs = () => {
    return (
        <Container className="section alignCenter green-bc" >
            <Box className="section alignStart"
                sx={{ flexDirection: { xs: "column", md: "row" } }}>

                {/* titles & data */}
                <Stack spacing={1}  sx={{ width: { xs: "100%", md: "30%" },
                    }}
                >
                    <Stack>
                        <p className="topText">a little about us</p>
                        <p className="title white">
                            the Best place to enjoy life
                        </p>
                    </Stack>

                    <Stack spacing={2}>
                        <p className="subtitle white textAlignJustify" >
                            the Best place to enjoy life place to enjoy life
                            place to enjoy life place to enjoy life place to
                            enjoy life place to enjoy life place to enjoy
                            lifnjoy life place to enjoy lif njoy life place to
                            enjoy lif njoy life place to enjoy lif e place to
                            enjoy life place to enjoy life.
                        </p>
                        <p className="subtitle orange bold" >
                            FRANCO MOLINA
                        </p>
                        <p className="subtitle white italic" >
                            CEO of Las Salinas
                        </p>
                    </Stack>
                </Stack>

                {/* img */}
                <Box sx={{ 
                    width: { xs: "100%", md: "70%" },
                }}>
                    <Video />
                </Box>
            </Box>
        </Container>
    );
};
