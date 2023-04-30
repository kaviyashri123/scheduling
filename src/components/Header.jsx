import { Box, Container, Typography } from '@mui/material'
import React from 'react'

import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
   
    return (
        <Container id="margin-dense" margin="dense" style={{background:"#a7ddf5", marginTop: "25px" }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', '@media (max-width: 600px)': { flexDirection: "column", alignItems: "center" } }}>
                <Typography variant="h2" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate("/")}>
                   <b> Scheduler Algorithms</b> 
                </Typography>
            </Box>
        </Container>

    )
}
