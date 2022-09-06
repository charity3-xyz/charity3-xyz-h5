import '@babel/polyfill';
import 'whatwg-fetch';
import 'es6-promise/auto';
import { configurePersistable } from 'mobx-persist-store';
import { route } from './constants/route';

configurePersistable(
  {
    storage: new Storage(),
    // debugMode: __DEV__,
  },
  {
    delay: 0,
  },
);

import * as React from 'react';
import bootstrap from 'veigar/bootstrap';
import { createHashHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { CssBaseline } from '@mui/material';
import { configure } from 'mobx';
import { syncHistory } from '@aomi/mobx-history';
import { setErrMsg } from '@aomi/common-service/utils/getErrMsg';
import { configure as httpConfigure } from '@aomi/common-service/HttpService';
import { Detail as DonateDetail } from './container/donate/detail';
import { ProjectHome as Donate } from './container/donate';
import { List as DonateList } from './container/donate/list';
import { New as DonateNew } from './container/donate/new';

import { Detail as CensorDetail } from './container/censor/detail';
import { Index as Censor } from './container/censor';
import { List as CensorList } from './container/censor/list';
import { Register as CensorRegister } from './container/censor/register';

import { Detail as ArbitrationDetail } from './container/arbitration/detail';
import { Index as Arbitration } from './container/arbitration';
import { List as ArbitrationList } from './container/arbitration/list';
import { Sumbit as ArbitrationSubmit } from './container/arbitration/submit';

import { ProjectHome as HelpHome } from './container/help';
import { Detail as HelpDetail } from './container/help/detail';
import { SeekHelpList as HelpList } from './container/help/list';
import { ProjectNew } from './container/help/new';
import { Home } from './container/home';
import { Storage } from './core/Storage';
import { SignIn } from './container/user/sign-in';

// mobx 配置
configure({ enforceActions: 'never' });
setErrMsg({});

httpConfigure({
  getArgs: {
    sort: 'id,desc',
  },
});

const history = syncHistory(createHashHistory());

const theme = createTheme({
  palette: {
    primary: {
      main: '#44E371',
    },
    success: {
      main: '#44E371',
    },
  },
});

bootstrap(() => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <Switch>
          <Route path={`${route.HOME}`} component={Home} exact />
          <Route path={`${route.DONATE}`} component={Donate} exact />
          <Route path={`${route.DONATE_DETAIL}`} component={DonateDetail} />
          <Route path={`${route.DONATE_LIST}`} component={DonateList} />
          <Route path={`${route.DONATE_NEW}`} component={DonateNew} />

          <Route path={`${route.HELP}`} component={HelpHome} exact />
          <Route path={`${route.HELP_LIST}`} component={HelpList} />
          <Route path={`${route.HELP_NEW}`} component={ProjectNew} />
          <Route path={`${route.HELP_DETAIL}`} component={HelpDetail} />

          <Route path={`${route.CENSOR}`} component={Censor} />
          <Route path={`${route.CENSOR_REGISTER}`} component={CensorRegister} />
          <Route path={`${route.CENSOR_LIST}`} component={CensorList} />
          <Route path={`${route.CENSOR_DETAIL}`} component={CensorDetail} exact />

          <Route path={`${route.ARBITRATION}`} component={Arbitration} />
          <Route path={`${route.ARBITRATION_LIST}`} component={ArbitrationList} />
          <Route path={`${route.ARBITRATION_DETAIL}`} component={ArbitrationDetail} exact />
          <Route path={`${route.ARBITRATION_SUBMIT}`} component={ArbitrationSubmit} />

          <Route path={route.SIGN_IN} component={SignIn} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
});
