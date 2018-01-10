import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import * as actionCreators from '../actions/actionCreators';

import Main from './Main';

function mapStateToProps (state) {
  return {
    fishes: state.fishes,
    order: state.order
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;
