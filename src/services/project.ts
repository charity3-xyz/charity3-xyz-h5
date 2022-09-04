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
  page: Page<any> = DEFAULT_PAGE;
  // 支持的医院列表
  hospitalsList: any[] = [];
  // 疾病列表
  diseaseCategories: any[] = [];

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
        url: Url.project,
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
   * 查询医院
   */
  async queryHospitals() {
    if (this.loading) {
      return;
    }
    this.loading = true;
    try {
      const res = await execute({
        url: Url.hospital,
        method: HttpMethod.GET,
      });
      this.hospitalsList = res.map((item: any) => ({ label: item.name, value: item.id }));
    } finally {
      this.loading = false;
    }
  }

  // 根据医院筛选病例
  getSupportDisease(id: string) {
    const target = this.hospitalsList.filter(item => item.id === id);
    this.diseaseCategories = target?.supportDiseaseCategories?.map((item: any) => ({
      label: item.name,
      value: item.id,
    }));
  }

  // 申请救助
  async addProject(args: any) {
    if (this.loading) {
      return;
    }
    this.loading = true;
    try {
      await execute({
        url: Url.addProject,
        method: HttpMethod.POST,
        body: { ...args },
      });
    } finally {
      this.loading = false;
    }
  }
}

export const projectService = new ProjectService();
