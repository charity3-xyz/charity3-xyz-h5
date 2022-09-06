import React, { Component } from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { App } from '../../components/App';
import { Button } from '../../components/button';
import { navigationServices } from '@aomi/mobx-history';
import { route } from '../../constants/route';
import { sessionService } from '../../services/session';
import { autoBind } from 'jsdk/autoBind';
import { observer } from 'mobx-react';

/**
 * 用户注册
 */
@observer
@autoBind
export class UserSignUp extends Component<any, any> {
  state = {
    name: '',
    idNo: '',
    password: '',
    confirmPassword: '',
  };

  handleStateChange(key: string) {
    return (e: any) => this.setState({ [key]: e.target.value });
  }

  handleRegister() {
    const { idNo, password, confirmPassword } = this.state;
    if (idNo && password && confirmPassword === password) {
      sessionService.registerAndLogin(this.state);
    }
  }

  render() {
    const { name, idNo, password, confirmPassword } = this.state;
    const { loading } = sessionService;
    return (
      <App justifyContent="center" alignItems="center" display="flex" minHeight="100vh" loading={loading}>
        <Stack
          bgcolor="#FFF"
          padding={3}
          borderRadius={3}
          minHeight={300}
          minWidth={400}
          spacing={3}
          direction="column"
        >
          <Box>
            <Typography variant="h6">{'注册Charity3用户'}</Typography>
            <Typography variant="body2">{'让全世界帮助您度过困难'}</Typography>
          </Box>
          <TextField required value={name} onChange={this.handleStateChange('name')} label="姓名" />
          <TextField required value={idNo} onChange={this.handleStateChange('idNo')} label="ID" />
          <TextField
            required
            value={password}
            onChange={this.handleStateChange('password')}
            label="密码"
            type="password"
          />
          <TextField
            required
            value={confirmPassword}
            onChange={this.handleStateChange('confirmPassword')}
            label="确认密码"
            type="password"
            error={password !== confirmPassword}
            helperText={password !== confirmPassword && '两次输入的密码不一致'}
          />

          <Button variant="contained" size="large" onClick={this.handleRegister}>
            {'立即注册'}
          </Button>
          <Button onClick={() => navigationServices.push(route.SIGN_IN)}>已有账号,立即登录</Button>
        </Stack>
      </App>
    );
  }
}
