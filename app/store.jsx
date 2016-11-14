import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import persistState from 'redux-localstorage';
import { whoami } from './reducers/auth';

import reducer from './reducers';


const middleware = applyMiddleware(thunkMiddleware, createLogger());

const enhancer = compose(middleware, persistState('cart'));

const store = createStore(reducer, enhancer);
export default store;

// Set the auth info at start
store.dispatch(whoami());
