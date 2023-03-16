import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// eslint-disable-next-line import/no-unresolved
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import User from './Reducer/Users';
import Settings from './Reducer/Settings';

export default createStore(
  combineReducers({
    User,
    Settings,
  }),
  {},
  applyMiddleware(thunk, promise)
);
