import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { autoBind } from 'jsdk/autoBind';
import { Link } from 'react-router-dom';
import { Stack, Container, Typography, Card, CardContent } from '@mui/material';
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
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div>
                <Link to="/help">求助者项目首页</Link>
              </div>
              <div>
                <Link to="/help/new">求助者申请捐助</Link>
              </div>
              <div>
                <Link to="/help/detail">求助者捐助详情</Link>
              </div>
              <div>
                <Link to="/help/list">求助者项目列表</Link>
              </div>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div>
                <Link to="/donate">捐赠者项目首页</Link>
              </div>
              <div>
                <Link to="/donate/new">捐赠者申请捐助</Link>
              </div>
              <div>
                <Link to="/donate/detail">捐赠者捐助详情</Link>
              </div>
              <div>
                <Link to="/donate/list">捐赠者项目列表</Link>
              </div>
            </CardContent>
          </Card>

          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div>
                <Link to="/censor">社工机构节点首页</Link>
              </div>
              <div>
                <Link to="/censor/register">注册为社工机构节点</Link>
              </div>
              <div>
                <Link to="/censor/list">社工机构节点列表详情</Link>
              </div>
              <div>
                <Link to="/censor/detail">社工机构节点详情首页</Link>
              </div>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div>
                <Link to="/arbitration">仲裁首页</Link>
              </div>
              <div>
                <Link to="/arbitration/list">仲裁审核列表页面</Link>
              </div>
              <div>
                <Link to="/arbitration/detail">仲裁审核详情页面</Link>
              </div>
              <div>
                <Link to="/arbitration/submit">仲裁审核信息提交页面</Link>
              </div>
            </CardContent>
          </Card>
        </Container>
      </App>
    );
  }
}
