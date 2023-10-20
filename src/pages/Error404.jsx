import { Container, Stack, Box } from '@mui/material'
import React from 'react'
import undercontruction from "../images/bajo-construccion.gif"

export const Error404 = () => {
   
  return (
    <Container sx={{ height: "max-content" }} >
      <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
        
        <p> Error404 </p>
        <p> Page under construction </p>
          <img src={undercontruction} alt="page under construction" style={{ width: "30%" }} />      
      </Stack>
    </Container>
  )
}
