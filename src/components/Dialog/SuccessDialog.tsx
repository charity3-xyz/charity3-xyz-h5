import React from 'react';
import { observer } from 'mobx-react';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '../../components/button';

import style from '../index.module.scss';

export const SuccessDialog = observer(function SuccessDialog({
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
      <DialogContent>您刚成为Charity3 慈善平台的节点，是否现在去认领人物？</DialogContent>
      <DialogActions>
        <Button variant="contained" color={'success'} onClick={onClose}>
          取消
        </Button>
        <Button variant="contained" color={'success'} onClick={onOk}>
          ToRepay
        </Button>
      </DialogActions>
    </Dialog>
  );
});
