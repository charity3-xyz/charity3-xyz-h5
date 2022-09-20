import React, { Component } from 'react';
import { App } from '../../components/App';
import { autoBind } from 'jsdk/autoBind';
import { observer } from 'mobx-react';
import { Container, Stack, Typography } from '@mui/material';
import { sessionService } from '../../services/session';
import { route } from '../../constants/route';

import { userProjectService } from '../../services/user-project';
import { navigationServices } from '@aomi/mobx-history';
import { NewForm } from './components/new-form';

/**
 * 求助者发起募捐
 */
@observer
@autoBind
export class ProjectNew extends Component<any, any> {
  componentDidMount() {
    const { authorization } = sessionService;
    if (!authorization) {
      navigationServices.push(route.SIGN_IN);
    }
  }

  render() {
    const { loading } = userProjectService;

    return (
      <App RootComponent={Container} loading={loading}>
        <Stack spacing={2} pt={6}>
          <Typography variant="h4" gutterBottom>
            Apply for new fund-raising
          </Typography>
        </Stack>
        <Stack pt={1}>Please make sure the information you submitted are true. We will have</Stack>
        <NewForm loading={loading} onFinish={userProjectService.createMedical} />
      </App>
    );
  }
}
