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

export const LoginUp = observer(function LoginUp({
  open,
  onClose,
  onOk,
  goLoginIn,
}: {
  open: boolean;
  onClose: any;
  onOk: any;
  goLoginIn: any;
}) {
  const [form, setForm] = useState<any>({ name: '', idNo: '', password: '' });
  const { name, idNo, password } = form;

  return (
    <Dialog onClose={onClose} open={open} className={style.dialog}>
      <DialogTitle>
        求助登记
        <IconButton
          aria-label="close"
          onClick={onClose}
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
            value={name}
            variant="standard"
            placeholder="请输入姓名"
            onChange={e => {
              setForm((prev: any) => ({
                ...prev,
                name: e.target.value,
              }));
            }}
          />
          <InputLabel shrink htmlFor="id">
            证件号码
          </InputLabel>
          <TextField
            autoFocus
            margin="dense"
            id="id"
            value={idNo}
            type="name"
            fullWidth
            variant="standard"
            placeholder="请输入证件号码"
            onChange={e => {
              setForm((prev: any) => ({
                ...prev,
                idNo: e.target.value,
              }));
            }}
          />
          <InputLabel shrink htmlFor="pwd">
            设置密码
          </InputLabel>
          <TextField
            autoFocus
            margin="dense"
            id="pwd"
            type="password"
            fullWidth
            variant="standard"
            value={password}
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
        <Button
          variant="contained"
          color={'success'}
          onClick={() => {
            onOk(form);
          }}>
          立即登记
        </Button>
      </DialogActions>
      <Container className={style.link}>
        已有账号直接
        <Link href="#" onClick={goLoginIn}>
          登录
        </Link>
      </Container>
    </Dialog>
  );
});
