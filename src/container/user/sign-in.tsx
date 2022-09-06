import React, { Component } from 'react';
import { autoBind } from 'jsdk/autoBind';
import { observer } from 'mobx-react';
import { Tabs, Tab, Box, BoxProps, FormControl, TextField, Stack, StackProps, Link } from '@mui/material';
import { App } from '../../components/App';
import { Button } from '../../components/button';
import { navigationServices } from '@aomi/mobx-history';
import { route } from '../../constants/route';
import { sessionService } from '../../services/session';

function TabPanel({
  value,
  index,
  children,
  ...props
}: React.PropsWithChildren<{ value: number; index: number } & StackProps>) {
  if (value !== index) {
    return <div />;
  }
  return <Stack {...props}>{children}</Stack>;
}

/**
 * 登录页面
 */
@observer
@autoBind
export class SignIn extends Component<any, any> {
  state = {
    tabValue: 0,
    username: '',
    password: '',
  };

  handleTabChange(e: any, newValue: number) {
    this.setState({ tabValue: newValue });
  }

  handleFormChange(key: string) {
    return (e: any) => {
      this.setState({ [key]: e.target.value });
    };
  }

  async handleLogin() {
    const { username, password } = this.state;
    await sessionService.getLoginIn({ username, password });
  }

  render() {
    const { tabValue, username, password } = this.state;
    const { loading } = sessionService;
    return (
      <App display="flex" minHeight="100vh" alignItems="center" flexDirection="column" loading={loading}>
        <Stack bgcolor="#FFF" padding={3} borderRadius={3} mt={15}>
          <Tabs value={tabValue} onChange={this.handleTabChange} centered>
            <Tab label="我是募捐者" />
            <Tab label="我是捐赠者/节点" />
          </Tabs>
          <Box minHeight={300} minWidth={400} mt={3}>
            <TabPanel value={tabValue} index={0} direction="column" spacing={3}>
              <TextField
                required
                fullWidth
                placeholder="请输入证件号码"
                label="证件号码"
                onChange={this.handleFormChange('username')}
              />
              <TextField
                required
                fullWidth
                type="password"
                label="登录密码"
                placeholder="密码长度8—16位，需包含字母、数字"
                onChange={this.handleFormChange('password')}
              />
              <Button
                variant="contained"
                size="large"
                disabled={loading || !username || !password}
                onClick={this.handleLogin}
              >
                登录
              </Button>
              <Button onClick={() => navigationServices.push(route.SIGN_UP)}>没有账号,立即注册</Button>
            </TabPanel>
            <TabPanel
              value={tabValue}
              index={1}
              minHeight={300}
              justifyContent="center"
              alignItems="center"
              display="flex"
              flex={1}
            >
              <Button onClick={sessionService.web3Auth}>{'Connect Wallet'}</Button>
            </TabPanel>
          </Box>
        </Stack>
      </App>
    );
  }
}
