import { makeAutoObservable } from 'mobx';
import { execute } from '../core/Request';
import { Url } from '../constants/url';
import { DEFAULT_PAGE, Page } from '@aomi/common-service/Page';

export class ProjectService {
  loading = false;

  page: Page<any> = DEFAULT_PAGE;

  constructor() {
    makeAutoObservable(this, undefined, {
      autoBind: true,
    });
  }

  /**
   * 查询项目信息
   * @param args 服务端的查询参数
   */
  async query(args: Record<string, any>) {
    if (this.loading) {
      return;
    }
    this.loading = true;
    try {
      this.page = await execute({
        url: Url.project,
        body: args,
      });
    } finally {
      this.loading = false;
    }
  }
}

export const projectService = new ProjectService();
