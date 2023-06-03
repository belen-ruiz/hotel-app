import { Box } from '@mui/material'
import { Stack } from '@mui/material'
import { Typography } from '@mui/material'
import { Toolbar } from '@mui/material'
import { Container } from '@mui/material'
import { features } from "../../utils/features"

export const Features = () => {
  return (
    <Container sx={{paddingTop: "4rem"}}>
         <Box 
            sx={{display: "flex", justifyContent: "center",alignItems:"center" }}>
            {
            features.map((feature) => (
                <Feature key={feature.id} data={feature} />
            ))    
            }
        </Box>
        
    </Container>
  )
}


const Feature = ({ data }) => {
    const { id, icon, title, description  } = data
    return (
        <Stack 
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                color:"#4f4e4e"
            }}>
            <Box>{icon}</Box>
            <Typography 
                sx={{borderBottom: "2px solid black"}}

                variant="subtitle2"
                >{title}</Typography>
            <Typography 
                sx={{
                    textAlign: "center"
                }}
                variant="caption"
                >{description}</Typography>
        </Stack>
    )
}