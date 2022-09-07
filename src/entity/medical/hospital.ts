import { DiseaseCategory } from './disease-category';

/**
 * 医院信息
 */
export type Hospital = {
  id: string;
  /**
   * 医院名称
   */
  name: string;

  /**
   * 医院电话
   */
  telNo: string;

  /**
   * 支持的疾病类目
   */
  supportDiseaseCategoryIds: Array<string>;

  supportDiseaseCategories: Array<DiseaseCategory>;

  /**
   * 医院地址
   */
  address: any;

  /**
   * 创建时间
   */
  createAt: Date;
};
