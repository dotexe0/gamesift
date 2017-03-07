import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import reducer from './reducers';

const middlewares = [
  logger()
]

const enhancers = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(
  reducer, undefined, enhancers
)

export default store;
