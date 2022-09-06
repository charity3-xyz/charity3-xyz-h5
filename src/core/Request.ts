import { execute as commonExecute, HttpRequest } from '@aomi/common-service/HttpService';
import ErrorCode from '@aomi/common-service/constants/ErrorCode';
import getErrMsg from '@aomi/common-service/utils/getErrMsg';
import { HttpMethod } from '@aomi/common-service/constants/HttpMethod';
import { ServiceError } from '@aomi/common-service/exception/ServiceError';
import SessionKey from '../constants/SessionKey';
import { toastService } from '../services/toast';
import { sessionService } from '../services/session';
import {navigationServices} from "@aomi/mobx-history";

export type Options = {
  /**
   * 获取错误信息的前缀
   */
  prefix?: string | undefined;
  /**
   * 成功是否提示
   */
  successTip?: boolean | undefined;
  /**
   * 错误是否提示
   */
  errorTip?: boolean | undefined;
  /**
   * 成功时页面返回
   */
  successPop?: boolean | undefined;

  /**
   * 自动处理未授权
   * 默认为true
   */
  autoUnAuthorize?: boolean;

  getToastType?: any;
} & HttpRequest;

/**
 * 请求封装
 * 1. 错误信息自动提示
 * 2. 只返回数据字段payload的值
 * 3. 错误抛出异常
 */
export async function execute({
  prefix,
  successTip,
  errorTip = true,
  successPop,
  autoUnAuthorize = true,
  ...params
}: Options) {
  params.headers = params.headers || {};
  const authorization = sessionStorage.getItem(sessionService.authorization);
  // 自动添加 authorization
  if (authorization) {
    (params.headers as any).authorization = authorization;
  }
  // 支持从session中设置header数据
  const headerArgsStr = sessionStorage.getItem(SessionKey.headerArgs);
  try {
    const args = headerArgsStr ? JSON.parse(headerArgsStr) : {};
    params.headers = {
      ...params.headers,
      ...args,
    };
  } catch (e) {
    console.warn('设置头部数据失败');
  }

  const response = (await commonExecute(params)) || {};

  const { status, payload, describe } = response;
  let msg: string | undefined = getErrMsg(response, prefix);

  // 1000状态码
  if (status === ErrorCode.UNAUTHORIZED) {
    if (autoUnAuthorize) {
      toastService.error(msg);
      sessionService.logout();
    }
    throw new ServiceError({ status, payload, describe });
  }

  if (ErrorCode.SUCCESS === status) {
    if (typeof successTip === 'boolean') {
      successTip && toastService.success(msg);
    } else if ((params.method || HttpMethod.GET).toLowerCase() !== 'get') {
      toastService.success(msg);
    }
    successPop && navigationServices.goBack();
    return payload;
  } else if (errorTip) {
    if (status === ErrorCode.CUSTOM_ERROR) {
      msg = payload ? `[${payload.status}] ${payload.message}` : describe;
    }
    toastService.error(msg ?? '');
  }

  if (ErrorCode.SUCCESS !== status) {
    throw new ServiceError({ status, payload, describe });
  }

  return payload;
}
