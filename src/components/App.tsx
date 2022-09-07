import React from 'react';
import {
  Alert,
  Box,
  BoxProps,
  CircularProgress,
  ContainerProps,
  Modal,
  Snackbar,
  StackProps,
  Typography,
} from '@mui/material';
import { observer } from 'mobx-react';
import { toastService } from '../services/toast';
import { Header } from './Header';
import { Footer } from './footer';

export type AppProps = (ContainerProps | BoxProps | StackProps) & {
  /**
   * 加载中状态
   */
  loading?: boolean;
  /**
   * 加载中的提示文字
   */
  loadingText?: string;
  RootComponent?: any;
  showHeader?: boolean;
  showFooter?: boolean;
};

/**
 * 基础应用
 * @param children
 * @constructor
 */
export const App = observer(function App({
  children,
  showHeader = true,
  showFooter = true,
  RootComponent = Box,
  loading = false,
  loadingText = '',
  ...props
}: React.PropsWithChildren<AppProps>) {
  const { status, open, message } = toastService;
  return (
    <main>
      {showHeader && <Header />}
      <RootComponent {...props}>{children}</RootComponent>
      {showHeader && <Footer />}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={3000}
        onClose={toastService.close}
      >
        <Alert onClose={toastService.close} severity={status} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      <Modal open={loading}>
        <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
          <Box>
            <CircularProgress />
            <Typography color="white">{loadingText}</Typography>
          </Box>
        </Box>
      </Modal>
    </main>
  );
});
