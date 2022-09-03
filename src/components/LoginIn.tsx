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
import { SuccessDialog } from './Dialog/SuccessDialog';
import { FailedDialog } from './Dialog/FailedDialog';

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
  const [showRepay, setShowRepay] = useState<boolean>(false);
  const [showFialedDialog, setShowFialedDialog] = useState<boolean>(false);

  return (
    <>
      <Dialog onClose={onClose} open={open} className={style.dialog}>
        <DialogTitle>
          登录
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{ position: 'absolute', right: 8, top: 8, color: theme => theme.palette.grey[500] }}>
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
              fullWidth
              variant="standard"
              placeholder="请输入证件号码"
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
              variant="standard"
              placeholder="密码长度8—16位，需包含字母、数字"
            />
          </Container>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color={'success'} onClick={onOk}>
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
      {/* 认领人物 */}
      <SuccessDialog onClose={() => setShowRepay(false)} open={showRepay} onOk={() => console.log('onko====>')} />

      {/* 节点已满 */}
      <FailedDialog
        onClose={() => setShowFialedDialog(false)}
        open={showFialedDialog}
        onOk={() => console.log('onok====>')}
      />
    </>
  );
});
