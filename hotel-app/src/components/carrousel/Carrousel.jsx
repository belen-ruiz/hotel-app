import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { Typography, Container, Box } from '@mui/material';
import { carrouselData } from "../../utils/carrouselData"


export const Carrousel = () => {

    return (
        <Container sx={{paddingLeft: { xs: 0, md: 0 },
        paddingRight: { xs: 0, md: 0 },}}>
            <Box sx={{
                zIndex: 999,
                height: "40%",
                width: "40%",
                position: "absolute",
                top: "40%",
                left: "30%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                alignSelf:"center",
                gap: "1rem",
                color: "white",
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(238, 236, 236, 0.155)",
                borderRadius: "10px"
            }}>
                <Typography 
                    variant="subtitle1"
                    sx={{borderBottom: "2px solid white"}}
                    >W E L C O M E </Typography>
                <Typography
                    variant="h3"
                    >LAS SALINAS </Typography>
                <Typography
                    variant="subtitle2"
                    >Your favorite choice </Typography>
                
            </Box>

            <Box sx={{
                height: "80vh",
                overflow: "hidden",
                position: "relative",
                zIndex: 99,
            }}>
                <Carousel interval="2000">
                    {
                    carrouselData.map( (item, i) => 
                    <Item key={i} item={item} /> )
                    }
                </Carousel>
            </Box>
        </Container>
    )
}

const Item = ({item}) => {
    return (
        <Paper sx={{
        }}>
            <img 
                src={item.url} 
                alt={item.description}
                 />
        </Paper>
    )
}