import React, { Component } from 'react';
import { App } from '../../components/App';
import { autoBind } from 'jsdk/autoBind';
import { observer } from 'mobx-react';
import { Container, Stack, TextFieldProps, Typography } from '@mui/material';
import { sessionService } from '../../services/session';
import { route } from '../../constants/route';
import { navigationServices } from '@aomi/mobx-history';
import { Button } from '../../components/button';
import { workNodeService } from '../../services/work-node';

/**
 * 社工结构节点入驻
 */
@observer
@autoBind
export class Register extends Component<any, any> {
  componentDidMount() {
    const { authorization } = sessionService;
    if (!authorization) {
      navigationServices.push(route.SIGN_IN);
    }
  }

  render() {
    const { loading } = workNodeService;
    return (
      <App RootComponent={Container} loading={loading}>
        <Stack bgcolor="#FFF" my={3} borderRadius={3} padding={3}>
          <Typography textAlign="center">{'社工机构节点入驻 - 责任与义务'}</Typography>
          <Typography>{'参与审核项目真实、并获取一定的报酬. 每个项目成功后可以获得项目分红'}</Typography>
          <Button onClick={workNodeService.register}>{'同意并立即入住'}</Button>
        </Stack>
      </App>
    );
  }
}
