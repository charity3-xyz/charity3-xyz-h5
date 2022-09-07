import React from 'react';
import { observer } from 'mobx-react';
import {
  AppBar,
  Avatar,
  Box,
  Button as MButton,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '../components/button';
import { route } from '../constants/route';
import { sessionService } from '../services/session';
import { useHistory } from 'react-router-dom';

const pages = [
  { title: 'Home', url: `${route.HOME}` },
  { title: '募捐项目', url: `${route.HELP}` },
  { title: '慈善公示监督', url: `${route.DONATE}` },
  { title: '行业失信名单', url: '/' },
  { title: '申请成为节点', url: `${route.CENSOR_REGISTER}` },
  { title: '仲裁委员会', url: `${route.ARBITRATION}` },
];

const workNodeSettings = [
  {
    label: '我参与的项目',
    url: route.HELP_LIST,
  },
  {
    label: 'Logout',
    onClick: sessionService.logout,
  },
];

const userSettings = [
  {
    label: '我的募捐申请',
    url: route.HELP_LIST,
  },
  {
    label: 'Logout',
    onClick: sessionService.logout,
  },
];

import { LoginUp } from './LoginUp';

import style from './index.module.scss';
import { navigationServices } from '@aomi/mobx-history';

export const Header = observer(function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [showSignUp, setShowSignUp] = React.useState<boolean>(false);
  let history = useHistory();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (url: string) => {
    setAnchorElNav(null);
    history.push(url);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const goLoginIn = () => {
    setShowSignUp(false);
  };

  const loginUp = async (args: any) => {
    await sessionService.getLoginUp(args);
    setShowSignUp(false);
  };

  const { user, isWorkNode, isWeb3User, authorization } = sessionService;
  const settings = isWorkNode ? workNodeSettings : userSettings;

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#FFF' }}>
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            {/* 小屏幕 */}
            {/* logo */}
            {/*<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />*/}
            {/* brand name */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {'Charity3'}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={`${index}`}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/*  大屏导航 */}
            {/* logo */}
            {/*<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />*/}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {'Charity3'}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', marginLeft: '45px' } }}>
              {pages.map((page, index) => (
                <MButton
                  key={`${index}`}
                  onClick={() => {
                    handleCloseNavMenu(page.url);
                  }}
                  sx={{ my: 2, display: 'block', color: '#000' }}
                >
                  {page.title}
                </MButton>
              ))}
            </Box>
            <Stack sx={{ flexGrow: 0 }} direction="row" spacing={1}>
              {!(isWeb3User || isWorkNode) && (
                <Button
                  onClick={() => {
                    history.push(route.HELP_NEW);
                  }}
                >
                  {'我要求助'}
                </Button>
              )}
              {authorization ? (
                <>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar>{'B'}</Avatar>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map(({ label, url, onClick }, index) => (
                      <MenuItem
                        key={`${index}`}
                        onClick={() => {
                          if (url) {
                            navigationServices.push(url);
                          } else if (onClick) {
                            onClick();
                          }
                          handleCloseUserMenu();
                        }}
                      >
                        <Typography textAlign="center">{label}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <Button
                  style={{ color: '#121214', fontWeight: '700' }}
                  key="login"
                  onClick={() => navigationServices.push(route.SIGN_IN)}
                >
                  {'Login'}
                </Button>
              )}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      {/* 注册弹窗 */}
      <LoginUp open={showSignUp} onClose={() => setShowSignUp(false)} onOk={loginUp} goLoginIn={goLoginIn} />
    </>
  );
});
