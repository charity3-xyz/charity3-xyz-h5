import React from 'react';
import { observer } from 'mobx-react';
import {
  AppBar,
  Avatar,
  Box,
  Button as MButton,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  InputLabel,
  FormControl,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { Button } from '../components/button';
import { path } from '../constants/route';
import { sessionService } from '../services/session';

const pages = ['Home', 'Product', 'Pricing', 'Contact'];
const settings = ['Logout'];

import style from './index.module.scss';

export const Header = observer(function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [showDialog, setShowDialog] = React.useState<boolean>(true);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { user } = sessionService;

  return (
    <>
      <AppBar position="static" color="transparent">
        <Container maxWidth={false}>
          <Toolbar disableGutters>
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
              }}>
              {'byBit cishan'}
            </Typography>
            {/* 小屏幕 */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit">
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
                }}>
                {pages.map(page => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
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
              }}>
              {'byBit cishan'}
            </Typography>
            {/*  大屏导航 */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map(page => (
                <MButton key={page} onClick={handleCloseNavMenu} sx={{ my: 2, display: 'block' }}>
                  {page}
                </MButton>
              ))}
            </Box>

            {/* 未登录：未登录展示login及我要求助按钮 */}
            {/* 已登录：右侧头像和头像下拉框的设置 */}
            {/* flexGrow 是干嘛的 */}
            {user ? (
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
                  onClose={handleCloseUserMenu}>
                  {settings.map(setting => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                {/* <Link href="#" underline="none" color="inherit" mr={2}>
                {'Login'}
              </Link> */}
                <MButton key="login" onClick={() => setShowDialog(true)}>
                  {'Login'}
                </MButton>
                <Button href={path.projectNew} variant="contained" color={'success'}>
                  {'我要求助'}
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Dialog onClose={() => setShowDialog(false)} open={showDialog} className={style.dialog}>
        <DialogTitle>
          求助登记
          <IconButton
            aria-label="close"
            onClick={() => setShowDialog(false)}
            sx={{ position: 'absolute', right: 8, top: 8, color: theme => theme.palette.grey[500] }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Container>
            <InputLabel shrink htmlFor="name">
              姓名
            </InputLabel>
            <TextField
              id="name"
              autoFocus
              margin="dense"
              type="name"
              fullWidth
              variant="standard"
              placeholder="请输入姓名"
            />
            <InputLabel shrink htmlFor="id">
              证件号码
            </InputLabel>
            <TextField
              autoFocus
              margin="dense"
              id="id"
              type="name"
              fullWidth
              variant="standard"
              placeholder="请输入证件号码"
            />
            <InputLabel shrink htmlFor="pwd">
              设置密码
            </InputLabel>
            <TextField
              autoFocus
              margin="dense"
              id="pwd"
              type="name"
              fullWidth
              variant="standard"
              placeholder="密码长度8—16位，需包含字母、数字"
            />
          </Container>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color={'success'}
            onClick={() => {
              console.log(2222);
            }}>
            立即登记
          </Button>
        </DialogActions>
        <Container className={style.link}>
          已有账号直接
          <Link href="#">登录</Link>
        </Container>
      </Dialog>
    </>
  );
});
