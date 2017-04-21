import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

const middlewares = [
  thunk
];

const isDev = process.env.NODE_ENV === 'development';

let enhancers;

if (isDev) {
  const logger = require('redux-logger');

  const devMiddleware = [
    logger()
  ]
  enhancers = compose(
    applyMiddleware(...middlewares, ...devMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
  )
} else {
  enhancers = compose(applyMiddleware(...middlewares))
}

const store = createStore(
  reducer, undefined, enhancers
)

export default store;
