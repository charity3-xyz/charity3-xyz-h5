import { makeAutoObservable } from 'mobx';
import { DEFAULT_PAGE, Page } from '@aomi/common-service/Page';
import { execute } from '../core/Request';
import { Url } from '../constants/url';
import { HttpMethod } from '@aomi/common-service/constants/HttpMethod';
import { navigationServices } from '@aomi/mobx-history';
import { route } from '../constants/route';

/**
 * 用户项目
 */
export class UserProjectService {
  loading = false;

  page: Page<any> = DEFAULT_PAGE;

  searchParams: any = {};

  constructor() {
    makeAutoObservable(this, undefined, {
      autoBind: true,
    });
  }

  /**
   * 查询项目信息
   * @param args 服务端的查询参数
   */
  async query(args?: Record<string, any>) {
    if (this.loading) {
      return;
    }
    this.loading = true;
    this.searchParams = args;
    try {
      this.page = await execute({
        url: Url.userProject,
        body: args,
      });
    } finally {
      this.loading = false;
    }
  }

  /**
   * 下一页
   */
  next(page?: number) {
    let nextPage;
    if (typeof page === 'number' && page >= 0) {
      nextPage = page;
    } else if (this.page.last) {
      return;
    } else {
      nextPage = this.page.number + 1;
    }

    this.query({
      ...this.searchParams,
      page: nextPage,
    });
  }

  /**
   * 创建医疗项目
   * @param args 请求参数
   */
  async createMedical(args: any) {
    if (this.loading) {
      return;
    }
    this.loading = true;
    try {
      const project = await execute({
        url: `${Url.addProject}`,
        method: HttpMethod.POST,
        body: args,
      });
      navigationServices.push({
        pathname: route.HELP_NEW_RESULT,
        params: project,
      });
    } finally {
      this.loading = false;
    }
  }
}

export const userProjectService = new UserProjectService();
