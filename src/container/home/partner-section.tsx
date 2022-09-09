import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import './home.less';
import banner from '../../assets/home/partner.png';
import bitverse from '../../assets/home/partner/bitverse.png';
import bybit from '../../assets/home/partner/bybit.png';
import cryptophd from '../../assets/home/partner/cryptophd.jpg';
import dtalk from '../../assets/home/partner/dtalk.png';
import moledao from '../../assets/home/partner/moledao.jpg';
import github from '../../assets/home/partner/github.png';

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
      <Box className="partner-img" textAlign="center" mt={8}>
        <img className="partner-img-2" src={bitverse} alt="charity3" width="80%" />
        <img className="partner-img-1" src={github} alt="charity3" width="80%" />
        <img className="partner-img-3" src={bybit} alt="charity3" width="80%" />
        <img className="partner-img-4" src={cryptophd} alt="charity3" width="80%" />
        <img className="partner-img-5" src={dtalk} alt="charity3" width="80%" />
        <img className="partner-img-6" src={moledao} alt="charity3" width="80%" />
      </Box>
    </Container>
  );
}
