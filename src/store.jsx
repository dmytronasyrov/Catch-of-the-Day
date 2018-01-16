import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerReducer, routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history';

import rootReducer from './reducers/index';
import { defaultFishes } from './reducers/fishesReducer';
import { defaultOrder } from './reducers/orderReducer';

//--------------------------------------------------------------------------------------------------

export const history = createBrowserHistory();
const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);
const middleware = compose(enhancers, applyMiddleware(routerMiddleware(history)));
const defaultState = { fishes: defaultFishes, order: defaultOrder };
const store = createStore(rootReducer, defaultState, middleware)

if (module.hot) {
  module.hot.accept('./reducers/index', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
