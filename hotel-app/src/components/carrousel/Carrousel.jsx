import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { Typography, Container, Box } from '@mui/material';
import { carrouselData } from "../../utils/carrouselData"


export const Carrousel = () => {

    return (
        <Container sx={{
           padding: { xs: 0, md: 0 }}}>
            <Container sx={{
                    padding: { xs: 0, md: 0 }}}>

                {/* img */}
                <Box sx={{
                    zIndex: 99,
                    overflow: "hidden",
                    position: "relative",
                    height: "50vh",
                    width: "100%",
                }}>
                    <Carousel interval="2000">
                        {
                        carrouselData.map( (item, i) => 
                        <Item key={i} item={item} /> )
                        }
                    </Carousel>
                </Box>

                {/* text box */}
                <Box sx={{
                    zIndex: 999,
                    position: "absolute",
                    top: "25%",
                    left: "35%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "1rem",
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

            </Container>
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