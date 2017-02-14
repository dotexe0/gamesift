require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/App';
import GameCardList from './components/GameCardList';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={GameCardList} />
    </Route>
  </Router>
)

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(routes, document.getElementById('app'))
);
