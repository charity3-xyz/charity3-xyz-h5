import React, { Component } from 'react';
import { autoBind } from 'jsdk/autoBind';
import { observer } from 'mobx-react';
import { Tabs, Tab, Box, BoxProps } from '@mui/material';
import { App } from '../components/App';
import { Button } from '../components/button';

function TabPanel({
  value,
  index,
  children,
  ...props
}: React.PropsWithChildren<{ value: number; index: number } & BoxProps>) {
  if (value !== index) {
    return <div />;
  }
  return <Box {...props}>{children}</Box>;
}

/**
 * 登录页面
 */
@observer
@autoBind
export class SignIn extends Component<any, any> {
  state = {
    tabValue: 0,
  };

  handleTabChange(e: any, newValue: number) {
    this.setState({ tabValue: newValue });
  }

  render() {
    const { tabValue } = this.state;
    return (
      <App display="flex" minHeight="100vh" justifyContent="center" alignItems="center" flexDirection="column">
        <Tabs value={tabValue} onChange={this.handleTabChange} centered>
          <Tab label="我是募捐者" />
          <Tab label="我是捐赠者/监督员" />
        </Tabs>
        <Box minHeight={300}>
          <TabPanel value={tabValue} index={0}></TabPanel>
          <TabPanel value={tabValue} index={1}>
            <Button>{'Connect Wallet'}</Button>
          </TabPanel>
        </Box>
      </App>
    );
  }
}
