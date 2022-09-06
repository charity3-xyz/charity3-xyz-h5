import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { walletService } from './blockchain/wallet';
import { execute } from '../core/Request';
import { Url } from '../constants/url';
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
      properties: ['user'],
    }).then(() => {
      console.log('load session');
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
        url: Url.web3Auth,
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
        url: Url.web3Auth,
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

  /**
   * 获取注册信息
   * @param args
   */
  async getLoginUp(args: Record<string, any>) {
    if (this.loading) {
      return;
    }
    this.loading = true;
    try {
      this.user = await execute({
        url: Url.loginUp,
        method: HttpMethod.POST,
        body: { ...args },
      });
    } finally {
      this.loading = false;
    }
  }

  // 登录
  async getLoginIn(args: Record<string, any>) {
    try {
      this.user = await execute({
        url: Url.loginIn,
        method: HttpMethod.POST,
        body: { ...args },
      });
    } finally {
    }
  }
}

export const sessionService = new SessionService();
