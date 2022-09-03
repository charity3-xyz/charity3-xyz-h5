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
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { Button } from '../components/button';

export const LoginUp = observer(function LoginUp({ showDialog, onclose, onOk }) {
  // const [showDialog, setShowDialog] = React.useState<boolean>(true);

  return (
    <Dialog onClose={onclose} open={showDialog}>
      <DialogTitle>
        求助登记
        <IconButton
          aria-label="close"
          onClick={onclose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500],
          }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We will send updates occasionally.
        </DialogContentText>
        <TextField autoFocus margin="dense" id="name" label="Name" type="name" fullWidth variant="standard" />

        <TextField autoFocus margin="dense" id="age" label="Age" type="name" fullWidth variant="standard" />

        <TextField autoFocus margin="dense" id="val" label="Name" type="name" fullWidth variant="standard" />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            console.log(2222);
          }}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
});
