import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert, Box, BoxProps, ContainerProps, CssBaseline, Snackbar, StackProps } from '@mui/material';
import { configure } from 'mobx';
import { observer } from 'mobx-react';
import { configurePersistable } from 'mobx-persist-store';
import { toastService } from '../services/toast';
import { Header } from './Header';

configurePersistable({
  storage: global.sessionStorage,
  // debugMode: __DEV__,
});
// mobx 配置
configure({ enforceActions: 'never' });

export type AppProps = (ContainerProps | BoxProps | StackProps) & {
  RootComponent?: any;
  showHeader?: boolean;
};

const theme = createTheme({
  palette: {
    success: {
      main: '#44E371',
    },
  },
});

/**
 * 基础应用
 * @param children
 * @constructor
 */
export const App = observer(function App({
  children,
  showHeader = true,
  RootComponent = Box,
  ...props
}: React.PropsWithChildren<AppProps>) {
  const { status, open, message } = toastService;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {showHeader && <Header />}
      <RootComponent {...props}>{children}</RootComponent>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={3000}
        onClose={toastService.close}>
        <Alert onClose={toastService.close} severity={status} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
});
