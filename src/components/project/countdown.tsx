import React from 'react';
import { useTimer } from 'reactjs-countdown-hook';
import { Stack } from '@mui/material';

const spanTimeStyle: any = {
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

const spanColonStyle: any = {
  display: 'inline-block',
  width: '14px',
  textAlign: 'center',
  color: '#333',
};

/**
 *
 * @constructor
 */
export function Countdown({ project }: { project: any }) {
  const { publicityDays = 1, publicityAt = 0 } = project;
  const count = (publicityAt + publicityDays * 86_400_000 - Date.now()) / 1000;
  const { isActive, counter, seconds, minutes, hours, days, pause, resume, reset } = useTimer(
    count.toFixed(),
    () => {},
  );
  if (count <= 0) {
    return <div />;
  }

  return (
    <>
      <span style={{ color: '#81858C', marginRight: '16px' }}>Countdown of the announcement</span>
      <span style={spanTimeStyle}>{days}</span>
      <span style={spanColonStyle}>:</span>
      <span style={spanTimeStyle}>{hours}</span>
      <span style={spanColonStyle}>:</span>
      <span style={spanTimeStyle}>{minutes}</span>
      <span style={spanColonStyle}>:</span>
      <span style={spanTimeStyle}>{seconds}</span>
    </>
  );
}
