import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { autoBind } from 'jsdk/autoBind';
import { Button } from '@mui/material';
import { Header } from '../../components/Header';
import { walletService } from '../../services/blockchain/wallet';
import { App } from '../../components/App';

/**
 * 首页
 * @constructor
 */
@observer
@autoBind
export class Home extends Component<any, any> {
  render() {
    const { accountAddress } = walletService;
    return (
      <App>
        <Header />
        <Button onClick={walletService.connect}>{accountAddress ? accountAddress : 'connect'}</Button>
      </App>
    );
  }
}
