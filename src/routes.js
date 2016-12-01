import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'mobx-react';

import App from './containers/App';
import About from './containers/About';
import NotFound from './containers/NotFound';
import MainLayout from './containers/MainLayout';
import Todo from './containers/Todo';
import { commentStore } from './stores/CommentStore';

// we're creating a component!
const routes = (
  <Provider commentStore={commentStore}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
          <IndexRoute component={App} />
          <Route path="/about" component={About} />
          <Route path="/todo" component={Todo} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>
)

export default routes;
