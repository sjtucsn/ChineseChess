import React from 'react';
import { Router, Route } from 'dva/router';
import ChessBoard from './routes/Chessboard';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={ChessBoard} />
    </Router>
  );
}

export default RouterConfig;
