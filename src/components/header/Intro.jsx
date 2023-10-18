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
import { alignCenter } from "../../custom/Display";


const bgImg =
    "https://images.pexels.com/photos/17488420/pexels-photo-17488420/free-photo-of-madera-paisaje-agua-apple.jpeg";

export const Intro = () => {
    return (
        <Container
            sx={{ ...alignCenter, position: "relative",
            }}
        >
            {/* img */}
            <Box sx={{ 
                display: "flex", 
                width: "100%", 
                overflow: "hidden" }}>
                <img
                    src={bgImg}
                    alt="who we are"
                    style={{ width: "100%", objectFit: "cover" }}
                />
            </Box>

            {/* text box */}
            <Stack
                sx={{
                    width: "100%",
                    //top: "50%",
                    display: "flex",
                    //left: "1rem",
                    position: "absolute",
                    //height: "33vh",
                    zIndex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0,8rem",
                }}
            >
                <Logo logo={LogoIntro} altLogo={"logo-intro"} height={{xs:"100px", md:"300px"}} />                

                {/* contact */}
                <Box sx={ContainedButton}>contact us</Box>
            </Stack>
        </Container>
    );
};
