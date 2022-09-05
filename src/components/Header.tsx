import React from 'react';
import { observer } from 'mobx-react';
import { isEmpty } from 'lodash';
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
  { title: 'Home', url: '/' },
  { title: '募捐项目', url: '/help' },
  { title: '慈善公示监督', url: '/donate' },
  { title: '行业失信名单', url: '/' },
];
const settings = ['Logout'];

import { LoginUp } from './LoginUp';
import { LoginIn } from './LoginIn';

import style from './index.module.scss';

export const Header = observer(function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [showSignUp, setShowSignUp] = React.useState<boolean>(false);
  const [showSignIn, setShowSignIn] = React.useState<boolean>(false);
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
    setShowSignIn(true);
  };

  const goLoginUp = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  const loginUp = async (args: any) => {
    await sessionService.getLoginUp(args);
    setShowSignUp(false);
  };

  const loginIn = async (args: any) => {
    await sessionService.getLoginIn(args);
    setShowSignIn(false);
  };

  const { user } = sessionService;

  return (
    <>
      <div className={style.header}>
        <AppBar position="static">
          <Container maxWidth={false}>
            <Toolbar disableGutters style={{ height: '91px' }}>
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
              {/* 小屏幕 */}
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
                  {pages.map(page => (
                    <MenuItem key={page.url} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.title}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
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
              {/*  大屏导航 */}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', marginLeft: '45px' } }}>
                {pages.map(page => (
                  <MButton
                    key={page.url}
                    onClick={() => {
                      handleCloseNavMenu(page.url);
                    }}
                    sx={{ my: 2, display: 'block', color: '#000' }}
                  >
                    {page.title}
                  </MButton>
                ))}
              </Box>

              {/* 未登录：未登录展示login及我要求助按钮 */}
              {/* 已登录：右侧头像和头像下拉框的设置 */}
              {!isEmpty(user) ? (
                <Box sx={{ flexGrow: 0 }}>
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
                    {settings.map(setting => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Box sx={{ flexGrow: 0 }}>
                  <MButton
                    style={{ color: '#121214', fontWeight: '700' }}
                    key="login"
                    onClick={() => setShowSignIn(true)}
                  >
                    {'Login'}
                  </MButton>
                  <Button
                    onClick={() => {
                      history.push(route.HELP_NEW);
                    }}
                    variant="contained"
                    style={{ height: '52px', width: '107px', marginLeft: '45px' }}
                  >
                    {'我要求助'}
                  </Button>
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </div>
      {/* 注册弹窗 */}
      <LoginUp open={showSignUp} onClose={() => setShowSignUp(false)} onOk={loginUp} goLoginIn={goLoginIn} />

      {/* 登录弹窗 */}
      <LoginIn open={showSignIn} onClose={() => setShowSignIn(false)} onOk={loginIn} goLoginUp={goLoginUp} />
    </>
  );
});
