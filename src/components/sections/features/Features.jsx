import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Container } from "@mui/material";
import { features } from "../../../utils/features";
import { Flip } from "react-awesome-reveal";
import { Titles } from "../../titles/Titles";



const Feature = ({ data }) => {
    const { id, icon, title } = data;
    return (
        <Stack
            className="feature-box green">
            <Box>{icon}</Box>
            <p className="menuWeb green textAlignCenter">{title}</p>
        </Stack>
    );
};

export const Features = () => {
    const topText = "What we can offer you"
    const title = "Our services"
    const subtitle = "Enjoy all benefits while you stay"


    return (
        <Container className="section a-center white-bc">
            <Stack spacing={2} className="section a-center container-web p-lg">
                {/* titles */}
                <Titles 
                topText={topText}
                    title={title} 
                    subtitle={subtitle}/>

                {/* item box */}

                <Box className="feature-item" >
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
