import { makeAutoObservable } from 'mobx';
import { execute } from '../core/Request';
import { Url } from '../constants/url';
import { DEFAULT_PAGE, Page } from '@aomi/common-service/Page';
import { HttpMethod } from '@aomi/common-service/constants/HttpMethod';

/**
 * 公共项目服务
 */
export class ProjectService {
  loading = false;

  searchParams: any = {};
  type: any = '';

  /**
   * 公开项目
   */
  page: Page<any> = DEFAULT_PAGE;
  /**
   * 用户对应的项目
   * 用户 = 普通用户、捐款人、节点
   */
  userPage: Page<any> = DEFAULT_PAGE;

  constructor() {
    makeAutoObservable(this, undefined, {
      autoBind: true,
    });
  }

  /**
   * 查询项目信息
   * @param args 服务端的查询参数
   * @param type
   */
  async query(args?: Record<string, any>, type?: 'user' | 'workNode') {
    if (this.loading) {
      return;
    }
    this.loading = true;
    this.searchParams = args;
    this.type = type;
    try {
      const url = type ? (Url as any)[`${type}Project`] : Url.project;
      const page = await execute({
        url,
        body: args,
      });
      if (type) {
        this.userPage = page;
      } else {
        this.page = page;
      }
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

    this.query(
      {
        ...this.searchParams,
        page: nextPage,
      },
      this.type,
    );
  }
}

export const projectService = new ProjectService();
