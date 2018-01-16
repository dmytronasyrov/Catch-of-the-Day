import { createStore, applyMiddleware, compose} from 'redux';
import { routerReducer, routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history';

import rootReducer from './reducers/index';

//--------------------------------------------------------------------------------------------------

const defaultState = { fishes: {}, order: {} };
const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);
export const history = createBrowserHistory();
const middleware = compose(enhancers, applyMiddleware(routerMiddleware(history)));
const store = createStore(rootReducer, defaultState, middleware)

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
