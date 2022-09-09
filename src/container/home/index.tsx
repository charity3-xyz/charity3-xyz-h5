import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { autoBind } from 'jsdk/autoBind';
import { Container, Typography } from '@mui/material';
import { App } from '../../components/App';
import { Button } from '../../components/button';
import { route } from '../../constants/route';
import bannerBg from '../../assets/home/banner.png';
import { navigationServices } from '@aomi/mobx-history';
import { PlatformSection } from './platform-section';
import { ProjectSection } from './project-section';
import { RegisterSection } from './register-section';
import { PartnerSection } from './partner-section';

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
        <Container
          sx={{
            height: 600,
            backgroundColor: '#FFF',
          }}
          maxWidth={false}
        >
          <Container
            sx={{
              backgroundImage: `url(${bannerBg})`,
              backgroundSize: '60%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center right',
              height: '100%',
              paddingTop: 10,
            }}
          >
            <Typography fontWeight="700" fontSize={50}>
              {'Openness & Transparency'}
            </Typography>
            <Typography fontWeight="700" fontSize={28}>
              {'make trust simpler and love purer'}
            </Typography>
            <Typography fontWeight="400" fontSize={16} color="rgba(129, 133, 140, 1)" mt={5}>
              {
                'bybit charitable public welfare program development platform, dedicated to linking donors and recipients in need'
              }
            </Typography>
            <Button
              onClick={() => navigationServices.push(route.HELP_NEW)}
              variant="contained"
              sx={{ mt: 7, fontWeight: '700' }}
            >
              {'Call For Help'}
            </Button>
          </Container>
          {/*<Card sx={{ minWidth: 275 }}>*/}
          {/*  <CardContent>*/}
          {/*    <div>*/}
          {/*      <Link to="/help">求助者项目首页</Link>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <Link to="/help/new">求助者申请捐助</Link>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <Link to="/help/detail">求助者捐助详情</Link>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <Link to="/help/list">求助者项目列表</Link>*/}
          {/*    </div>*/}
          {/*  </CardContent>*/}
          {/*</Card>*/}
          {/*<Card sx={{ minWidth: 275 }}>*/}
          {/*  <CardContent>*/}
          {/*    <div>*/}
          {/*      <Link to="/donate">捐赠者项目首页</Link>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <Link to="/donate/new">捐赠者申请捐助</Link>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <Link to="/donate/detail">捐赠者捐助详情</Link>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <Link to="/donate/list">捐赠者项目列表</Link>*/}
          {/*    </div>*/}
          {/*  </CardContent>*/}
          {/*</Card>*/}
          {/*<Card sx={{ minWidth: 275 }}>*/}
          {/*  <CardContent>*/}
          {/*    <div>*/}
          {/*      <Link to="/censor">社工机构节点首页</Link>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <Link to="/censor/register">注册为社工机构节点</Link>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <Link to="/censor/list">社工机构节点列表详情</Link>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <Link to="/censor/detail">社工机构节点详情首页</Link>*/}
          {/*    </div>*/}
          {/*  </CardContent>*/}
          {/*</Card>*/}
          {/*<Card sx={{ minWidth: 275 }}>*/}
          {/*  <CardContent>*/}
          {/*    <div>*/}
          {/*      <Link to="/arbitration">仲裁首页</Link>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <Link to="/arbitration/list">仲裁审核列表页面</Link>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <Link to="/arbitration/detail">仲裁审核详情页面</Link>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <Link to="/arbitration/submit">仲裁审核信息提交页面</Link>*/}
          {/*    </div>*/}
          {/*  </CardContent>*/}
          {/*</Card>*/}
        </Container>

        {/*Trustworthy public welfare platform*/}
        <PlatformSection />
        {/* Fundraising project classification */}
        <ProjectSection />
        {/* re */}
        <RegisterSection />
        <PartnerSection />
      </App>
    );
  }
}
