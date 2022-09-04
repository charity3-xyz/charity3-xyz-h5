import { makeAutoObservable } from 'mobx';
import { DEFAULT_PAGE, Page } from '@aomi/common-service/Page';
import { execute } from '../core/Request';
import { Url } from '../constants/url';
import { ReviewResult } from '@aomi/common-service/ReviewService/ReviewResult';
import { HttpMethod } from '@aomi/common-service/constants/HttpMethod';

/**
 * 用户项目
 */
export class WorkNodeProjectService {
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
  async query(args: Record<string, any>) {
    if (this.loading) {
      return;
    }
    this.loading = true;
    this.searchParams = args;
    try {
      this.page = await execute({
        url: Url.workNodeProject,
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
   * 加入项目或者认领项目
   * @param projectId 项目id
   * @param master true 标识认领项目 false 为加入项目
   */
  async join(projectId: string, master: boolean = false) {
    if (this.loading) {
      return;
    }
    this.loading = true;
    try {
      await execute({
        url: Url.workNodeProject,
        method: HttpMethod.PATCH,
        body: {
          projectId,
          master,
        },
      });
    } finally {
      this.loading = false;
    }
  }

  /**
   * 项目审核
   * @param projectId 项目ID
   * @param result 审核结果
   * @param describe 审核说明
   */
  async review(projectId: string, result: ReviewResult, describe: string) {
    if (this.loading) {
      return;
    }
    this.loading = true;
    try {
      await execute({
        url: Url.workNodeProject,
        method: HttpMethod.POST,
        body: {
          projectId,
          result,
          describe,
        },
      });
    } finally {
      this.loading = false;
    }
  }
}

export const workNodeProjectService = new WorkNodeProjectService();
