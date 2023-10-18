// import React from "react";
// import { Typography, Container, Box, Stack } from "@mui/material";
// import { ContainedButton } from "../../custom/Buttons";

// const bgImg =
//     "https://images.pexels.com/photos/17488420/pexels-photo-17488420/free-photo-of-madera-paisaje-agua-apple.jpeg";

// export const Intro = () => {
//     return (
//         <Container
//             sx={{
//                 display: "flex",
//                 //width: "100vw",
//                 //height: "100vh",
//                 position: "relative",
//                 padding: { xs: 0, md: 0, lg: 0 },
//                 margin: { xs: 0, md: 0, lg: 0 },
//                 justifyContent: "center",
//                 alignItems: "center"
//                 }}>

//             {/* img */}
//             <Box sx={{ display: "flex", width: "100%", overflow: "hidden", }}>
//                     <img
//                         src={bgImg}
//                         alt="who we are"
//                         style={{ width: "100%", objectFit:"cover" }}
//                     />
//             </Box>

//             {/* text box */}
//             <Stack
//                 sx={{
//                     width: "100%",
//                     //top: "50%",
//                             display: "flex",
//                             //left: "1rem",
//                             position: "absolute",
//                             padding: { xs: 4, md: 16, lg: 24 },

//                         //height: "33vh",
//                         zIndex: 1,
//                     justifyContent: "center",
//                     alignItems: "center",
//                     gap: "0,8rem",
//                     color: "white",
//                 }}>
//                 <Typography variant="h3">AURORA MONTAIN </Typography>
//                 <Typography variant="subtitle2">É muito fácil revelar na FotoRegistro! As fotos podem ser enviadas tanto do seu celular quanto do computador. Faça login no site, escolha suas fotos e receba em casa. </Typography>

//                 {/* contact */}
//                 <Box sx={ContainedButton} >
//                         contact us
//                 </Box>

//             </Stack>
//         </Container>
//     );
// };

import React from "react";
import { Typography, Container, Box, Stack } from "@mui/material";
import { ContainedButton } from "../../custom/Buttons";
import { Logo } from "../logo/Logo";
import LogoIntro from "../../images/logo_aurora_white-10.png"
import { disableGutters, alignCenter } from "../../custom/Display";
import { Flip } from "react-awesome-reveal";


const bgImg =
    "https://images.pexels.com/photos/17488420/pexels-photo-17488420/free-photo-of-madera-paisaje-agua-apple.jpeg";

export const Intro = () => {
    return (
        <Container
            sx={{ ...alignCenter, ...disableGutters, position: "relative" }}
        >
            {/* img */}
            <Box sx={{ 
                display: "flex", 
                width: "100%", 
                maxHeight: "500px",
                overflow: "hidden",
                position: "relative",  
                zIndex: 1,
            
                }}>                   
                <img
                    src={bgImg}
                    alt="who we are"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />

<Box sx={{backgroundColor: "rgba(66,59,16,.6)", zIndex: 2, position: "absolute", top: 0, bottom: 0, left: 0, right: 0, content: '"  "',
            }}></Box>
            </Box>

            

            {/* text box */}
            <Stack
                sx={{
                    display: "flex",
                    width: "100%",
                    height: "auto",
                    top: "30%",
                    position: "absolute",
                    zIndex: 3,
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0,8rem",

                }}
            >
                <Flip delay={1} fraction={1} duration="2000">
                    <Logo logo={LogoIntro} altLogo={"logo-intro"} height={{xs:"100px", md:"300px"}} />
                </Flip>              

                {/* contact */}
                <Flip direction="down" delay={1} duration="2000">                 
                    <Box sx={ContainedButton}>contact us</Box>
                </Flip>
            </Stack>
        </Container>
    );
};
