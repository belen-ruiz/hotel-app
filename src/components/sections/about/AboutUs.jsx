import { Container, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom"; 
import ReactPlayer from 'react-player'
import { TitlesSecondary } from "../../titles/Titles";


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
    const topText = "a little about us"
    const title = "the Best place to enjoy life"
    
    const data = "the Best place to enjoy life place to enjoy life place to enjoy life place to enjoy life place to enjoy life place to enjoy life place to enjoy lifnjoy life place to enjoy lif njoy life place to enjoy lif njoy life place to enjoy lif e place to enjoy life place to enjoy life."
    const sign = "FRANCO MOLINA"
    const label = "CEO of Las Salinas"

    return (
        <Container className="section a-center green-bc" >
            <Box className="section a-start container-web"
                >

                {/* titles & data */}
                <Stack spacing={1}  className="title-web">
                    <TitlesSecondary topText={topText} title={title}/>

                    <Stack spacing={2}>
                        <p className="subtitle white textAlignJustify"> { data } </p>
                        <p className="subtitle orange bold" > { sign } </p>
                        <p className="subtitle white italic" > {label }  </p>
                    </Stack>
                </Stack>

                {/* img */}
                <Box sx={{ width: { xs: "100%", md: "70%" } }}>
                    <Video />
                </Box>
            </Box>
        </Container>
    );
};
