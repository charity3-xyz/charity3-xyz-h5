import React from 'react';
import { Box, Container, Typography } from '@mui/material';

import banner from '../../assets/home/register.png';

export function RegisterSection() {
  return (
    <Container sx={{ bgcolor: '#FFF', py: 8.25 }} maxWidth={false}>
      <Container>
        <Box>
          <Typography variant="h4" fontWeight="700">
            {'Register your information and'}
            <Typography />
            {'let more people help you'}
          </Typography>
        </Box>
        <img src={banner} alt="register" width="55%" />
      </Container>
    </Container>
  );
}
