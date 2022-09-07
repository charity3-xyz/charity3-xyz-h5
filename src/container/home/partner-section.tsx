import { Box, Container, Typography } from '@mui/material';
import React from 'react';

import banner from '../../assets/home/partner.png';

export function PartnerSection() {
  return (
    <Container sx={{ py: 8.25 }}>
      <Box textAlign="center">
        <Typography variant="h4" fontWeight="700">
          {'Trustworthy public'}
          <Typography />
          {'welfare platform'}
        </Typography>
        <Typography variant="body2">{'There are so many people to help you realize your dreams'}</Typography>
      </Box>
      <Box textAlign="center" mt={8}>
        <img src={banner} alt="charity3" width="80%" />
      </Box>
    </Container>
  );
}
