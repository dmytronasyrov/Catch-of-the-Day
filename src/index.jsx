import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import store, { history } from './store';
import * as actions from './actions/actions';
import css from './styles/style.styl';
import registerServiceWorker from './utils/registerServiceWorker';

// import App from './components/App';
import StorePicker from './components/StorePicker';
import Store from './components/Store';
import NotFound from './components/NotFound';
import Main from './components/Main';

function mapStateToProps (state) {
  return {
    fishes: state.fishes,
    order: state.order
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

const router = (
  <Provider store={ store }>
    <Router history={ history }>
      <App>
        <Switch>
          <Route exact path = "/" component ={ StorePicker }/>
          <Route path="/store/:storeId" component={ Store }/>
          <Route component={ NotFound }/>
        </Switch>
      </App>
    </Router>
  </Provider>
);

render (router, document.querySelector('#root'))
registerServiceWorker();
