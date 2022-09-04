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
import { ProjectHome as HelpHome } from './container/help';
import { Detail as HelpDetail } from './container/help/detail';
import { List as HelpList } from './container/help/list';
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
          <Route path="/donate" component={Donate} />
          <Route path="/donate/detail" component={DonateDetail} />
          <Route path="/donate/list" component={DonateList} />
          <Route path="/donate/new" component={DonateNew} />

          <Route path="/help" component={HelpHome} />
          <Route path="/help/detail" component={HelpDetail} />
          <Route path="/help/list" component={HelpList} />
          <Route path="/help/new" component={ProjectNew} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
});
