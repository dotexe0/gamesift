require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';

import App from './components/App';
import GameCardList from './components/GameCardList';

const routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={GameCardList} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(routes, document.getElementById('app'));
