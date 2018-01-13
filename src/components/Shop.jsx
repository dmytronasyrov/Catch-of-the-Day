import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import base from '../setup/base';
import * as actions from '../reducers/order_actions';
import store from '../store';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';

// ###########################################################################################

class Shop extends React.Component {

  constructor (props) {
    super(props)

    this.addFish = this.addFish.bind(this);
    this.updateFish = this.updateFish.bind(this);
    this.removeFish = this.removeFish.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);

    this.props = {
      fishes: {},
      order: {}
    }
  }

  componentWillMount () {
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {context: this, state: 'fishes'});
  //
  //   const localStorageRef = localStorage.getItem(`order-${this.props.match.params.storeId}`);
  //
  //   if (localStorageRef)
  //     this.setState({ order: JSON.parse(localStorageRef) })
  }

  componentWillUpdate(nextProps, nextState) {
    // localStorage.setItem(`order-${this.props.match.params.storeId}`, JSON.stringify(nextState.order));
  }

  componentWillUnmount () {
    base.removeBinding(this.ref);
  }

  addFish (fish) {
    // const fishes = { ...this.state.fishes };
    // const timestamp = Date.now();
    // fishes[`fish-${timestamp}`] = fish;

    // this.setState({ fishes });
  }

  updateFish (key, updatedFish) {
    // const fishes = { ...this.state.fishes };
    // fishes[key] = updatedFish;

    // this.setState({ fishes });
  }

  removeFish (key) {
    // const fishes = { ...this.state.fishes };
    // fishes[key] = null;

    // this.setState({ fishes });
  }

  addToOrder (key) {
    this.props.dispatch(actions.addToOrder(key));
  }

  removeFromOrder (key) {
    this.props.dispatch(actions.removeFromOrder(key));
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
          storeId={ this.props.match.params.storeId }
        />
      </div>
    );
  }
}

Shop.propTypes = {
  match: PropTypes.object.isRequired
}

export default connect((state) => {
  return {
    ...state,
    fishes: state.fishes,
    order: state.order
  }
})(Shop);
