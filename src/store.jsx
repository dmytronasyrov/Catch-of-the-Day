import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerReducer, routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import indexReducer from './reducers/indexReducer';

//--------------------------------------------------------------------------------------------------

export const history = createBrowserHistory();
const router = routerMiddleware(history)
const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);
const middleware = compose(applyMiddleware(thunk, router), enhancers);
const store = createStore(indexReducer, middleware);

if (module.hot) {
  module.hot.accept('./reducers/indexReducer', () => {
    const nextIndexReducer = require('./reducers/indexReducer').default;
    store.replaceReducer(nextIndexReducer);
  });
}

export default store;
