import React, { Component } from 'react';
import { TextField } from '@mui/material';
import { App } from '../../components/App';

/**
 * 用户注册
 */
export class UserSignUp extends Component<any, any> {
  render() {
    return (
      <App showHeader={false} justifyContent="center" alignItems="center" display="flex" minHeight="100vh">
        <TextField label="ID" />
        <TextField label="Email" />
        <TextField label="验证码" />
      </App>
    );
  }
}
