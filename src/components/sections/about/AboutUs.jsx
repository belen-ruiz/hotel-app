import { Container, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom"; 
import ReactPlayer from 'react-player'
import { TitlesSecondary } from "../../titles/Titles";


const Video = () => {
    const url = "https://www.youtube.com/watch?v=VupspyQYYdY"
    return (
        <Box className="image w-100" >
            <ReactPlayer 
            width="100%"
            title="hotel tour video"
            url={ url }
            muted>
            </ReactPlayer>
        </Box>
 )  
}

export const AboutUs = () => {
    const topText = "a little about us"
    const title = "the Best place to enjoy life"
    const sign = "FRANCO MOLINA"
    const label = "CEO of Las Salinas"
    const data = "the Best place to enjoy life place to enjoy life place to enjoy life place to enjoy life place to enjoy life place to enjoy life place to enjoy lifnjoy life place to enjoy lif njoy life place to enjoy lif njoy life place to enjoy lif e place to enjoy life place to enjoy life."
    
    return (
        <Container className="a-start green-bc" >
            <Box className="a-start web-container p-lg"
                >

                {/* titles & data */}
                <Stack spacing={1}  className="a-start w-30">
                    <TitlesSecondary topText={topText} title={title}/>

                    <Stack spacing={2}>
                        <p className="subtitle white"> { data } </p>
                        <p className="subtitle orange bold" > { sign } </p>
                        <p className="subtitle white italic" > {label }  </p>
                    </Stack>
                </Stack>

                {/* img */}
                <Box className="w-70">
                    <Video />
                </Box>
            </Box>
        </Container>
    );
};