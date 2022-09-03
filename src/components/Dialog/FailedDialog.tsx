import React from 'react';
import { observer } from 'mobx-react';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '../../components/button';

import style from '../index.module.scss';

export const FailedDialog = observer(function FailedDialog({
  open,
  onClose,
  onOk,
}: {
  open: boolean;
  onClose: any;
  onOk: any;
}) {
  return (
    <Dialog onClose={onClose} open={open} className={style.tipsDialog}>
      <DialogTitle>
        温馨提示
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: theme => theme.palette.grey[500] }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>节点名额已满，请稍后再试</DialogContent>
      <DialogActions>
        <Button variant="contained" color={'success'} onClick={onOk}>
          确定
        </Button>
      </DialogActions>
    </Dialog>
  );
});
