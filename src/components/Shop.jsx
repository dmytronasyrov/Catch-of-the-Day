import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as shopActions from '../reducers/shopActions';
import * as orderActions from '../reducers/orderActions';
import * as fishesActions from '../reducers/fishesActions';
import store from '../store';

import Fishes from './Fishes';
import Order from './Order';
import Inventory from './Inventory';

//--------------------------------------------------------------------------------------------------

class Shop extends React.Component {

  componentWillMount () {
    this.props.dispatch(shopActions.openShop(this.props.match.params.shopId));
    this.props.dispatch(shopActions.firebaseSync());
  }

  render () {
    return (
      <div className="catch-of-the-day">
        <Fishes
          fishes={ this.props.fishes }
          addToOrder={ (key) => { this.props.dispatch(orderActions.addToOrder(key)) }}
        />

        <Order
          fishes={ this.props.fishes }
          order={ this.props.order }
          removeFromOrder={ (key) => { this.props.dispatch(orderActions.removeFromOrder(key)) }}
        />

        <Inventory
          addFish={ (fish) => { this.props.dispatch(fishesActions.addFish(fish)) }}
          removeFish={ (key) => { this.props.dispatch(fishesActions.removeFish(key)) }}
          fishes={ this.props.fishes }
          updateFish={ (key, fish) => { this.props.dispatch(fishesActions.updateFish(key, fish)) }}
          shopId={ this.props.match.params.shopId }
          loadSamples={ () => { this.props.dispatch(fishesActions.loadSamples()) }}
        />
      </div>
    );
  }
}

Shop.propTypes = {
  match: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  fishes: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired
}

export default connect((state) => { return state })(Shop);
