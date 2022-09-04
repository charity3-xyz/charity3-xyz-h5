import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const spanTimeStyle = {
  display: 'inline-block',
  width: '33px',
  height: '30px',
  background: '#FAFAFA',
  boxShadow: 'inset 0px 1.97143px 4.27143px rgba(0, 0, 0, 0.25)',
  borderRadius: '2.62857px',
  textAlign: 'center',
  lineHeight: '30px',
  color: '#1A1A1A',
  fontWeight: 600,
  fontSize: '14px',
};

const spanColonStyle = {
  display: 'inline-block',
  width: '14px',
  textAlign: 'center',
  color: '#333',
};

const StatusEnd = () => {
  return (
    <Grid container sx={{ marginTop: '36px' }}>
      <Grid item xs={12} sx={{ textAlign: 'right' }}>
        <div>
          <span>募捐进度：</span>
          <Typography
            sx={{
              display: 'inline',
              fontSize: '1.5rem',
              color: '#ADB1B8',
            }}
            component="span"
          >
            审核中
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default StatusEnd;
