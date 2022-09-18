import { makeAutoObservable } from 'mobx';
import { walletService } from './blockchain/wallet';
import { sessionService } from './session';
import { toastService } from './toast';
import { execute } from '../core/Request';
import { Url } from '../constants/url';
import { HttpMethod } from '@aomi/common-service/constants/HttpMethod';

/**
 * 捐赠者项目服务
 */
export class DonateProjectService {
  loading = false;

  constructor() {
    makeAutoObservable(
      this,
      {},
      {
        autoBind: true,
      },
    );
  }

  /**
   * 捐赠项目
   */
  async preDonate() {
    if (this.loading) {
      return;
    }
    this.loading = true;
    try {
      if (!sessionService.authorization) {
        await sessionService.web3Auth();
      }
      if (!this.userCheck()) {
        return;
      }
    } finally {
      this.loading = false;
    }
  }

  async donate(body: { amount: string; projectId: string }) {
    if (this.loading) {
      return;
    }
    this.loading = true;
    try {
      const projectDonate = await execute({
        url: Url.projectDonate,
        method: HttpMethod.POST,
        body,
      });
      console.log('中心化处理成功,开始合约调用', projectDonate.chainCertificate);
      // TODO 合约调用
    } finally {
      this.loading = false;
    }
  }

  private userCheck() {
    let accountAddress = walletService.accountAddress;
    console.log(`连接的帐户: ${accountAddress}`);
    if (!accountAddress) {
      return false;
    }
    const { authorization, isWeb3User, isWorkNode } = sessionService;
    if (!authorization) {
      toastService.error('请使用您的钱包登录');
      return false;
    }
    if (isWorkNode) {
      toastService.error('您是机构,不能参与捐赠');
      return false;
    }
    if (!isWeb3User) {
      toastService.error('您不是Web3用户,请使用Web3钱包登录');
      return false;
    }
    // TODO 检查是不是主网

    return true;
  }
}

export const donateProjectService = new DonateProjectService();
