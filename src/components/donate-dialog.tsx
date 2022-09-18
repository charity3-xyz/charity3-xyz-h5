import React, { useEffect, useState } from 'react';
import {
  Alert,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  SvgIcon,
  TextField,
  Typography,
  TypographyProps,
} from '@mui/material';
import { DialogProps } from '@mui/material/Dialog/Dialog';
import { Button } from './button';
import { walletService } from '../services/blockchain/wallet';
import TransformToIcon from '../assets/transform-to.svg';
import { donateProjectService } from '../services/donate-project';

export type DonateDialogProps = {
  projectId: string;
} & DialogProps;

function Label(props: TypographyProps) {
  return <Typography fontSize={14} color="rgba(129, 133, 140, 1)" {...props} />;
}

export function DonateDialog({ projectId, ...props }: DonateDialogProps) {
  const [balance, setBalance] = useState('0');
  const [value, setValue] = useState('0');
  useEffect(() => {
    init();
  }, []);

  async function init() {
    // const b = await walletService.usdtBalance();
    // setBalance(b);
  }

  function valid() {
    return value > '0' && balance >= value;
  }

  function handleDonate() {
    donateProjectService.donate({
      projectId,
      amount: value,
    });
  }

  return (
    <Dialog fullWidth maxWidth="xs" {...props}>
      <DialogTitle textAlign="center">{'您正在发起一笔捐款'}</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Stack bgcolor="rgba(245, 247, 250, 1)" padding={2} borderRadius={1} spacing={2}>
            <Stack display="flex" direction="row" justifyContent="space-between">
              <Label>{'You Donate'}</Label>
              <Label>{`Balance: ${balance}`}</Label>
            </Stack>
            <Stack display="flex" direction="row" justifyContent="space-between" color="rgba(18, 18, 20, 1)">
              <Typography fontSize={24}>{'USDT'}</Typography>
              <TextField
                placeholder="0.0"
                variant="standard"
                value={value}
                onChange={e => setValue(e.target.value)}
                InputProps={{ disableUnderline: true }}
                inputProps={{ style: { textAlign: 'right' } }}
              />
            </Stack>
            <Stack display="flex" direction="row" justifyContent="space-between">
              <Label>{'Tether USD'}</Label>
              <Label>{`≈$${balance}`}</Label>
            </Stack>
          </Stack>
          <Stack alignItems="center" zIndex={999} sx={{ mt: '-8px !important' }}>
            <img src={TransformToIcon} width={32} height={32} />
          </Stack>
          <Stack
            border={1}
            borderRadius={2}
            borderColor="rgba(233, 237, 242, 1)"
            padding={2}
            spacing={2}
            sx={{ mt: '-8px !important' }}
          >
            <Stack>
              <Label>{'To Address'}</Label>
              <Typography height={54} bgcolor="rgba(245, 247, 250, 1)" padding={2} borderRadius={2}>
                {'0x00000000000000000000000000000'}
              </Typography>
            </Stack>
            <Stack>
              <Label>{'Belong to'}</Label>
              <Typography height={54} bgcolor="rgba(245, 247, 250, 1)" padding={2} borderRadius={2}>
                {'华佗医院🏥'}
              </Typography>
            </Stack>
          </Stack>
          <Alert severity="error">
            {'Only coins donated from this page wiil be used on the project you’ve chosen. ' +
              'Any transaction from other methods to this address cannot be recognized as a relative donation.'}
          </Alert>
          <Button fullWidth variant="contained" size="large" disabled={!valid()} onClick={handleDonate}>
            {'Confirm'}
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
