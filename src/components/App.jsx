import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import * as orderActions from '../reducers/orderActions';

import Main from './Main';

//--------------------------------------------------------------------------------------------------

function mapStateToProps (state) {
  return {
    fishes: state.fishes,
    order: state.order
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(orderActions, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;
