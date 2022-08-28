import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { autoBind } from 'jsdk/autoBind';
import { Stack, Container, Typography } from '@mui/material';
import { App } from '../../components/App';
import { Button } from '../../components/button';
import { path } from '../../constants/route';

/**
 * 首页
 * @constructor
 */
@observer
@autoBind
export class Home extends Component<any, any> {
  render() {
    return (
      <App>
        {/* banner */}
        <Container sx={{ height: 'calc(100vh - 70px)', display: 'flex', flexDirection: 'column', paddingTop: 20 }}>
          <Typography variant="h3">Charity3</Typography>
          <Typography>基于Web3技术实现的慈善项目，让您的爱心真正落实,让有需要帮助的人得到帮助。</Typography>
          <Typography>一切公开透明,接受全球Web3用户监督</Typography>

          <Stack spacing={1} direction="row" mt={3}>
            <Button href={path.projectNew} variant="contained">
              {'我需要帮助'}
            </Button>
            <Button href={path.project} variant="outlined">
              {'捐助ta人'}
            </Button>
            <Button>{'我要参与监督'}</Button>
          </Stack>
        </Container>
      </App>
    );
  }
}
