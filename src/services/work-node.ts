import { makeAutoObservable } from 'mobx';
import { execute } from '../core/Request';
import { Url } from '../constants/url';
import { HttpMethod } from '@aomi/common-service/constants/HttpMethod';

export class WorkNodeService {
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
   * 节点注册
   */
  async register() {
    if (this.loading) {
      return;
    }
    this.loading = true;
    try {
      const workNode = await execute({
        url: Url.workNode,
        method: HttpMethod.POST,
      });
      // todo 调用合约进行质押
      // 合约调用参数
      // pledgeAmount 服务端返回的质押金额
      console.log(workNode);
    } finally {
      this.loading = false;
    }
  }
}

export const workNodeService = new WorkNodeService();
