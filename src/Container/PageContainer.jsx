import React from 'react'
import Container from '@mui/material/Container';

function PageContainer({ children }) {
    return (
        <Container style={{ backgroundColor: '#E8E8E8' }} maxWidth="lg">{children}</Container>
    )
}

export default PageContainer