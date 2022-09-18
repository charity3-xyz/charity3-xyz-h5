import { makeAutoObservable } from 'mobx';
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

  constructor() {
    makeAutoObservable(this, undefined, {
      autoBind: true,
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
