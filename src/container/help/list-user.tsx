import React, { Component } from 'react';
import { autoBind } from 'jsdk/autoBind';
import { observer } from 'mobx-react';
import { authed } from '../../core/authed';
import { App } from '../../components/App';
import { ProjectList } from '../../components/project/project-list';
import { projectService } from '../../services/project';
import { sessionService } from '../../services/session';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { navigationServices } from '@aomi/mobx-history';
import { route } from '../../constants/route';

/**
 * 用户的项目列表
 */
@authed
@observer
@autoBind
export class UserProjectList extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.handleQuery();
  }

  handleQuery() {
    const { isWorkNode } = sessionService;
    projectService.query({}, isWorkNode ? 'workNode' : 'user');
  }

  render() {
    const { isWeb3User, isWorkNode } = sessionService;
    const { userPage, loading } = projectService;
    let title = '';
    if (isWorkNode) {
      title = '我参与的项目';
    } else if (isWeb3User) {
      title = '我捐赠的项目';
    } else {
      title = '我的募捐项目';
    }
    return (
      <App loading={loading} RootComponent={Container} sx={{ my: 5 }}>
        <Grid container mb={1} alignItems="center">
          <Grid item xs={6}>
            <Typography variant="h4">{title}</Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'right' }}>
            {/*web3 用户不显示申请按钮*/}
            {!isWeb3User && (
              <Button
                onClick={() => navigationServices.push(route.HELP_NEW)}
                sx={{ padding: '16px 32px', fontSize: '1.125rem' }}
                variant="contained"
              >
                New Fund-Raising
              </Button>
            )}
          </Grid>
        </Grid>
        <ProjectList page={userPage} onPageChange={projectService.next} />
      </App>
    );
  }
}
