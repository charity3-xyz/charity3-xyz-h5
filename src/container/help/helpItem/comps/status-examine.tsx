import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const StatusExamine = () => {
  return (
    <Grid container sx={{ marginTop: '36px' }}>
      <Grid item xs={12} sx={{ textAlign: 'right' }}>
        <div>
          <span>Status：</span>
          <Typography
            sx={{
              display: 'inline',
              fontSize: '1.5rem',
              color: '#F7A600',
            }}
            component="span"
          >
            Approving
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default StatusExamine;
