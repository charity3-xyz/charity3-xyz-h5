import React, { Component } from 'react';
import { sessionService } from '../services/session';
import { route } from '../constants/route';
import { navigationServices } from '@aomi/mobx-history';
import { observer } from 'mobx-react';

/**
 * 是否已经授权检查
 * 如果已经授权、则方法可以继续执行
 * 如果未授权则退出
 */
export function authed(...args: Array<any>): any {
  if (args.length === 1) {
    const target = args[0];
    return observer(
      class AuthWrapper extends Component<any, any> {
        static options = target.options;

        componentDidMount() {
          if (!sessionService.authorization) {
            navigationServices.replace(route.SIGN_IN);
          }
        }

        render() {
          const TargetWrapperComponent = target;
          return sessionService.user && <TargetWrapperComponent {...this.props} />;
        }
      },
    );
  } else {
    const descriptor = args[2];
    const oldValue = descriptor.value;
    descriptor.value = function () {
      if (sessionService.authorization) {
        return oldValue.apply(this, arguments);
      }
      return undefined;
    };
  }
}
