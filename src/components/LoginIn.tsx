import React, { useState } from 'react';
import { observer } from 'mobx-react';
import {
  Container,
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputLabel,
  Link,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '../components/button';

import style from './index.module.scss';

export const LoginIn = observer(function LoginIn({
  open,
  onClose,
  onOk,
  goLoginUp,
}: {
  open: boolean;
  onClose: any;
  onOk: any;
  goLoginUp: any;
}) {
  const [form, setForm] = useState<any>({ username: '', password: '' });

  const { username, password } = form;
  return (
    <>
      <Dialog onClose={onClose} open={open} className={style.dialog}>
        <DialogTitle>
          登录
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{ position: 'absolute', right: 8, top: 8, color: theme => theme.palette.grey[500] }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Container>
            <InputLabel shrink htmlFor="id">
              证件号码
            </InputLabel>
            <TextField
              autoFocus
              margin="dense"
              id="id"
              type="name"
              value={username}
              fullWidth
              variant="standard"
              placeholder="请输入证件号码"
              onChange={e => {
                setForm((prev: any) => ({
                  ...prev,
                  username: e.target.value,
                }));
              }}
            />
            <InputLabel shrink htmlFor="pwd">
              密码
            </InputLabel>
            <TextField
              autoFocus
              margin="dense"
              id="pwd"
              type="password"
              fullWidth
              value={password}
              variant="standard"
              placeholder="密码长度8—16位，需包含字母、数字"
              onChange={e => {
                setForm((prev: any) => ({
                  ...prev,
                  password: e.target.value,
                }));
              }}
            />
          </Container>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color={'success'} onClick={() => onOk(form)}>
            登录
          </Button>
        </DialogActions>
        <Container className={style.link}>
          没有账号
          <Link href="#" onClick={goLoginUp}>
            立即注册
          </Link>
        </Container>
      </Dialog>
    </>
  );
});
