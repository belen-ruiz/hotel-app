import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { Typography, Container, Box } from '@mui/material';
import { carrouselData } from "../../utils/carrouselData"


export const Carrousel = () => {

    return (
        <Container>
            <Box sx={{
                zIndex: 999,
                backgroundColor: "#0518546c",
                height: "50%",
                width: "50%",
                position: "absolute",
                top: "40%",
                left: "25%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                color: "white"
            }}>
                <Typography 
                    variant="subtitle1"
                    sx={{borderBottom: "2px solid white"}}
                    >W E L C O M E </Typography>
                <Typography
                    variant="h3"
                    >L A S S A L I N A </Typography>
                <Button 
                    variant="outlined"
                    color="primary"
                    >BOOK NOW</Button>
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