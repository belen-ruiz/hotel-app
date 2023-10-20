import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Container } from "@mui/material";
import { features } from "../../../utils/features";
import { alignCenter } from "../../../custom/Display";
import { Flip } from "react-awesome-reveal";


const Feature = ({ data }) => {
    const { id, icon, title } = data;
    return (
        <Stack
            className="feature-box white">
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
                    className="alignCenter"
                >
                    <p className="topText">
                        Enjoy all benefits while you stay
                    </p>

                    <p className="title white">Our services</p>

                    <p className="subtitle white">
                        Enjoy all benefits while you stay
                    </p>
                </Stack>

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
