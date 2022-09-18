import React from 'react';
import { Button as MButton, ButtonProps } from '@mui/material';

/**
 * 按钮
 * @param props
 * @constructor
 */
export function Button(props: ButtonProps) {
  return <MButton sx={{ height: 54, fontWeight: '700' }} {...props} />;
}
