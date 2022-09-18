import React, { useEffect } from 'react';
import { App } from '../../components/App';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { route } from '../../constants/route';
import { navigationServices } from '@aomi/mobx-history';
import { ProjectList } from '../../components/project/project-list';
import { projectService } from '../../services/project';
import { observer } from 'mobx-react';
import { sessionService } from '../../services/session';

/**
 * 求助者项目列表
 * 公开大众可看
 */
export const SeekHelpList = observer(() => {
  const { isWeb3User } = sessionService;
  const { page } = projectService;
  useEffect(() => {
    projectService.query();
  }, []);

  return (
    <App RootComponent={Container} sx={{ my: 5 }}>
      <Grid container>
        <Grid item xs={6}>
          <Typography className="mui-title" variant="h3" sx={{ marginBottom: '2rem' }}>
            {'Fund-raising Project'}
          </Typography>
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
      <ProjectList page={page} onPageChange={projectService.next} />
    </App>
  );
});
