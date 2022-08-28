import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

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
}

export const sessionService = new SessionService();
