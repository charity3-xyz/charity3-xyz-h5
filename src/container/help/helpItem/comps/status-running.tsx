import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const StatusRunning = () => {
  return (
    <Grid
      container
      sx={{
        lineHeight: '2.625rem',
        fontWeight: 400,
        color: '#81858C',
        fontSize: '.875rem',
      }}
    >
      <Grid item xs={4}>
        <div>55% raised</div>
      </Grid>
      <Grid item xs={4} sx={{ textAlign: 'center' }}>
        <div>
          <span>Total funding：</span>
          <Typography sx={{ color: '#44E371', fontSize: '.875rem' }} component="span">
            20,00 USDT
          </Typography>
        </div>
      </Grid>
      <Grid item xs={4} sx={{ textAlign: 'right' }}>
        <div>
          <span>募捐进度：</span>
          <Typography
            sx={{
              display: 'inline',
              fontSize: '1.5rem',
              color: '#44E371',
            }}
            component="span"
          >
            募集中
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default StatusRunning;
