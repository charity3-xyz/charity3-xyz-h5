import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const StatusReject = () => {
  return (
    <Grid
      container
      sx={{
        lineHeight: '2.625rem',
        fontWeight: 400,
        color: '#81858C',
        fontSize: '.875rem',
        marginTop: '24px',
      }}
    >
      <Grid item xs={8}>
        <div style={{ lineHeight: '16px', paddingTop: '14px' }}>
          驳回理由： This is the introduction This is the introduction This is the introduction This is the introduction
          This is the，This isThis is the introduction This is the introduction This is the introduction This is the
          introduction This is the，This is
        </div>
      </Grid>
      <Grid item xs={4} sx={{ textAlign: 'right' }}>
        <div>
          <span>Status：</span>
          <Typography
            sx={{
              display: 'inline',
              fontSize: '1.5rem',
              color: '#EF454A',
            }}
            component="span"
          >
            Failed
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default StatusReject;
