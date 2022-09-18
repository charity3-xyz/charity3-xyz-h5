import React from 'react';
import { App } from '../../components/App';
import { Container, Stack, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button } from '../../components/button';

/**
 * 新增项目结果
 * @constructor
 */
export function ProjectNewResult() {
  return (
    <App RootComponent={Container}>
      <Stack minHeight={500} bgcolor="#FFF" my={6} borderRadius={3} justifyContent="center" alignItems="center">
        <Stack justifyContent="center" alignItems="center" width="50%" spacing={3}>
          <CheckCircleIcon sx={{ width: 80, height: 80, color: 'primary.main', opacity: 0.47 }} />
          <Typography variant="h4" fontWeight="800">
            {'Submitted Successfully'}
          </Typography>
          <Typography>
            {
              'Your fund-raising will be audited and as soon as approved, it will open to the public donation. During\nthe process please keep available via the number&email which you submitted.'
            }
          </Typography>

          <Button key="jump" variant="contained" onClick={() => console.log(123)}>
            Check My Project
          </Button>
        </Stack>
      </Stack>
    </App>
  );
}
