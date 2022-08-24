import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert, Box, BoxProps, ContainerProps, CssBaseline, Snackbar, StackProps } from '@mui/material';
import { toastService } from '../services/toast';
import { observer } from 'mobx-react';

export type AppProps = (ContainerProps | BoxProps | StackProps) & {
  RootComponent?: any;
};

const theme = createTheme();

/**
 * 基础应用
 * @param children
 * @constructor
 */
export const App = observer(function App({
  children,
  RootComponent = Box,
  ...props
}: React.PropsWithChildren<AppProps>) {
  const { status, open, message } = toastService;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
