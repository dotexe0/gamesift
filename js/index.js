require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';

import App from './components/App';
import GameCardList from './components/GameCardList';
import GameDetails from './components/GameDetails';
import LandingPage from './components/LandingPage';

const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={LandingPage} />
      <Route path="/home" component={App}>
        <IndexRoute component={GameCardList} />
        <Route path="/home/games/:gameID" component={GameDetails} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(routes, document.getElementById('app'));
