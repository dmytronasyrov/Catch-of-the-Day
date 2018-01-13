import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import * as order_actions from '../reducers/order_actions';

import Main from './Main';

// ###########################################################################################

function mapStateToProps (state) {
  return {
    fishes: state.fishes,
    order: state.order
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(order_actions, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;
