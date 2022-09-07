/**
 * 疾病信息
 */
export type DiseaseCategory = {
  id: string;
  name: string;

  /**
   * 治疗最小费用
   */
  treatmentCostMin: string | number;
  /**
   * 治疗最大费用
   */
  treatmentCostMax: string | number;

  /**
   * 疾病描述
   */
  describe: string;

  /**
   * 创建时间
   */
  createAt: Date;
};
