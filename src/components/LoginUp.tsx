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
  const [showRepay, setShowRepay] = useState<boolean>(false);
  const [showFialedDialog, setShowFialedDialog] = useState<boolean>(false);

  return (
    <>
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
              type="password"
              fullWidth
              variant="standard"
              placeholder="密码长度8—16位，需包含字母、数字"
            />
          </Container>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color={'success'} onClick={onOk}>
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
