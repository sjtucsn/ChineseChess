import React from 'react';
import { Router, Route } from 'dva/router';
import Hello from './routes/hello';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Hello} />
    </Router>
  );
}

export default RouterConfig;
