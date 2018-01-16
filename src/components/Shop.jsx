import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import base from '../setup/base';
import * as shopActions from '../reducers/shopActions';
import * as orderActions from '../reducers/orderActions';
import * as fishesActions from '../reducers/fishesActions';
import store from '../store';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';

//--------------------------------------------------------------------------------------------------

class Shop extends React.Component {

  constructor (props) {
    super(props)

    this.addFish = this.addFish.bind(this);
    this.updateFish = this.updateFish.bind(this);
    this.removeFish = this.removeFish.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);
    this.loadSamples = this.loadSamples.bind(this);

    // this.props = {
    //   fishes: {},
    //   order: {},
    //   shop: ""
    // }
  }

  componentWillMount () {
    this.props.dispatch(shopActions.openShop(this.props.match.params.shopId));
    // this.ref = base.syncState(`${this.props.shopId}/fishes`, {context: this, state: 'fishes'});
    //
    // const localStorageRef = localStorage.getItem(`order-${this.props.match.params.shopId}`);
    //
    // if (localStorageRef)
    //   this.setState({ order: JSON.parse(localStorageRef) })
  }

  // componentWillUpdate(nextProps, nextState) {
    // console.log("PROPS: " + JSON.stringify(nextProps));
    // console.log("STATE: " + JSON.stringify(nextState));
    //
    // this.setState({ fishes: nextProps.fishes })
    // this.state = nextState;
    // this.props = nextProps;
    // localStorage.setItem(`order-${this.props.match.params.shopId}`, JSON.stringify(nextState.order));
  // }

  // componentWillUnmount () {
  //   base.removeBinding(this.ref);
  // }

  addFish (fish) {
    this.props.dispatch(fishesActions.addFish(fish));
  }

  updateFish (key, fish) {
    this.props.dispatch(fishesActions.updateFish(key, fish));
  }

  removeFish (key) {
    this.props.dispatch(fishesActions.removeFish(key));
  }

  loadSamples () {
    this.props.dispatch(fishesActions.loadSamples());
  }

  addToOrder (key) {
    this.props.dispatch(orderActions.addToOrder(key));
  }

  removeFromOrder (key) {
    this.props.dispatch(orderActions.removeFromOrder(key));
  }

  render () {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="list-of-fishes">
            {
              Object.keys(this.props.fishes).map(key =>
                <Fish key={ key } index={ key } details={ this.props.fishes[key] } addToOrder={ this.addToOrder }/>
              )
            }
          </ul>
        </div>

        <Order
          fishes={ this.props.fishes }
          order={ this.props.order }
          removeFromOrder={ this.removeFromOrder }
        />
        <Inventory
          addFish={ this.addFish }
          removeFish={ this.removeFish }
          fishes={ this.props.fishes }
          updateFish={ this.updateFish }
          shopId={ this.props.match.params.shopId }
          loadSamples={ this.loadSamples }
        />
      </div>
    );
  }
}

Shop.propTypes = {
  match: PropTypes.object.isRequired
}

export default connect((state) => {
  return state;
  // return {
  //   ...state,
  //   shop: state.shop,
  //   fishes: state.fishes,
  //   order: state.order
  // }
})(Shop);
