import { Container, Stack, Box } from '@mui/material'
import React from 'react'
import undercontruction from "../images/bajo-construccion.gif"

export const Error404 = () => {
   
  return (
    <Container className="page-container p-0" sx={{ height: "max-content" }} >
      <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
        
        <div> Error404 </div>
        <div> Page under construction </div>
          <img src={undercontruction} alt="page under construction" style={{ width: "30%" }} />      
      </Stack>
    </Container>
  )
}
