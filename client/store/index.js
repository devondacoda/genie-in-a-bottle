import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import user from './user';
import products from './products';
import order from './order';
import { authenticate } from './auth';

const reducer = combineReducers({
  user, products, order, authenticate,
});

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true }),
));
const store = createStore(reducer, middleware);

export default store;
export * from './user';
export * from './products';
export * from './order';
export * from './auth';

