import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store, { history } from './store';
import css from './styles/style.styl';
import registerServiceWorker from './utils/registerServiceWorker';

import App from './components/App';
import StorePicker from './components/StorePicker';
import Shop from './components/Shop';
import NotFound from './components/NotFound';

const router = (
  <Provider store={ store }>
    <Router history={ history }>
      <App>
        <Switch>
          <Route exact path = "/" component ={ StorePicker }/>
          <Route path="/store/:storeId" component={ Shop }/>
          <Route component={ NotFound }/>
        </Switch>
      </App>
    </Router>
  </Provider>
);

render (router, document.querySelector('#root'))
registerServiceWorker();
