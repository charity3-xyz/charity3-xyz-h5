/**
 * 项目状态
 */
export enum Status {
  /**
   * 等待认领
   */
  WAIT = 'WAIT',
  /**
   * 审核中
   */
  REVIEWING = 'REVIEWING',
  /**
   * 募集中
   */
  FUNDRAISING = 'FUNDRAISING',
  /**
   * 公示中
   */
  PUBLICITY = 'PUBLICITY',
  /**
   * 仲裁中
   */
  ARBITRATION = 'ARBITRATION',
  /**
   * 驳回
   */
  TURN_DOWN = 'TURN_DOWN',
  /**
   * 取消
   */
  CANCEL = 'CANCEL',
  /**
   * 完成
   */
  FINISH = 'FINISH',
}

export const StatusText = {
  [Status.WAIT]: '审核中',
  [Status.REVIEWING]: '审核中',
  [Status.FUNDRAISING]: '募集中',
  [Status.PUBLICITY]: '公示中',
  [Status.ARBITRATION]: '仲裁中',
  [Status.TURN_DOWN]: '已驳回',
  [Status.CANCEL]: '已取消',
  [Status.FINISH]: '已完成',
};
