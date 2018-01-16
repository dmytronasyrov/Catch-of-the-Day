import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerReducer, routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

//--------------------------------------------------------------------------------------------------

export const history = createBrowserHistory();
const router = routerMiddleware(history)
const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);
const middleware = compose(applyMiddleware(thunk, router), enhancers);
const store = createStore(rootReducer, middleware);

if (window.devToolsExtension) {
  window.devToolsExtension.updateStore(store);
}

if (module.hot) {
  module.hot.accept('./reducers/index', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
