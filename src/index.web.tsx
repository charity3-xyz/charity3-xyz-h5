import '@babel/polyfill';
import 'whatwg-fetch';
import 'es6-promise/auto';
import { configurePersistable } from 'mobx-persist-store';

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
          <Route path="/" component={Home} exact />
          <Route path="/donate" component={Donate} exact />
          <Route path="/donate/detail" component={DonateDetail} />
          <Route path="/donate/list" component={DonateList} />
          <Route path="/donate/new" component={DonateNew} />

          <Route path="/help" component={HelpHome} exact />
          <Route path="/help/detail" component={HelpDetail} />
          <Route path="/help/list" component={HelpList} />
          <Route path="/help/new" component={ProjectNew} />

          <Route path="/censor" component={Censor} />
          <Route path="/censor/register" component={CensorRegister} />
          <Route path="/censor/list" component={CensorList} />
          <Route path="/censor/detail" component={CensorDetail} exact />

          <Route path="/arbitration" component={Arbitration} />
          <Route path="/arbitration/list" component={ArbitrationList} />
          <Route path="/arbitration/detail" component={ArbitrationDetail} exact />
          <Route path="/arbitration/submit" component={ArbitrationSubmit} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
});
