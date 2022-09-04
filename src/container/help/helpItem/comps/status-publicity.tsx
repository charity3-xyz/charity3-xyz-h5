import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTimer } from 'reactjs-countdown-hook';

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

const StatusPublicity = () => {
  const { isActive, counter, seconds, minutes, hours, days, pause, resume, reset } = useTimer(120, handleTimerFinish);
  function handleTimerFinish() {
    //alert('times up!');
  }

  return (
    <Grid container sx={{ marginTop: '36px' }}>
      <Grid item xs={6}>
        <div>
          <span style={{ color: '#81858C', marginRight: '16px' }}>公示结束倒计时</span>
          <span style={spanTimeStyle}>{days}</span>
          <span style={spanColonStyle}>:</span>
          <span style={spanTimeStyle}>{hours}</span>
          <span style={spanColonStyle}>:</span>
          <span style={spanTimeStyle}>{minutes}</span>
          <span style={spanColonStyle}>:</span>
          <span style={spanTimeStyle}>{seconds}</span>
        </div>
      </Grid>
      <Grid item xs={6} sx={{ textAlign: 'right' }}>
        <div>
          <span>募捐进度：</span>
          <Typography
            sx={{
              display: 'inline',
              fontSize: '1.5rem',
              color: '#121214',
            }}
            component="span"
          >
            公示中
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default StatusPublicity;
