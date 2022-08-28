import React, { Component } from 'react';
import { TextField } from '@mui/material';
import { App } from '../../components/App';
import { Button } from '../../components/button';
import { sessionService } from '../../services/session';

/**
 * 用户注册
 */
export class UserSignUp extends Component<any, any> {
  handleLoginPre() {}

  render() {
    return (
      <App showHeader={false} justifyContent="center" alignItems="center" display="flex" minHeight="100vh">
        <Button onClick={sessionService.web3Auth}>{'login'}</Button>
        <TextField label="ID" />
        <TextField label="Email" />
        <TextField label="验证码" />
      </App>
    );
  }
}
