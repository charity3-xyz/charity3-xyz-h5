import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { walletService } from './blockchain/wallet';
import { execute } from '../core/Request';
import { URL } from '../constants/url';
import { HttpMethod } from '@aomi/common-service/constants/HttpMethod';

/**
 * 会话服务
 */
export class SessionService {
  loading = false;

  /**
   * 登录用户信息
   */
  user = undefined;

  constructor() {
    makeAutoObservable(this, undefined, {
      autoBind: true,
    });
    makePersistable(this, {
      name: 'SessionStore',
      properties: [],
    });
  }

  async web3Auth() {
    if (this.loading) {
      return;
    }
    this.loading = true;
    try {
      await walletService.connect();
      const { accountAddress } = walletService;
      const token = await execute({
        url: URL.web3Auth,
        method: HttpMethod.PATCH,
        body: {
          address: accountAddress,
        },
      });

      const msg = `Welcome to Charity3!

Click to sign in and accept the Charity3 Terms of Service: https://charity3.xyz

This request will not trigger a blockchain transaction or cost any gas fees.

Your authentication status will reset after 24 hours.

Wallet address:
${accountAddress}

Nonce:
${token.id}`;
      const signature = await walletService.sign(msg);

      const res = await execute({
        url: URL.web3Auth,
        method: HttpMethod.POST,
        body: {
          address: accountAddress,
          signature,
        },
      });
      console.log(`登录成功: ${res}`);
    } finally {
      this.loading = false;
    }
  }
}

export const sessionService = new SessionService();
