import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'

import store, { history } from './store';

import App from './components/App';
import ShopPicker from './components/ShopPicker';
import Shop from './components/Shop';
import NotFound from './components/NotFound';

//--------------------------------------------------------------------------------------------------

const routes = (
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <App>
        <Switch>
          <Route exact path = "/" component ={ ShopPicker }/>
          <Route path="/shop/:shopId" component={ Shop }/>
          <Route component={ NotFound }/>
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>
);

export default routes;
