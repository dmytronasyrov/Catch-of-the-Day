import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'

import store from '../store';
import { getFunName } from '../utils/helpers';

//--------------------------------------------------------------------------------------------------

class ShopPicker extends React.Component {

  goToShop (e) {
    e.preventDefault();

    const shopId = this.shopInput.value;
    this.context.router.history.push(`/shop/${shopId}`);
  }

  render () {
    return (
      <form className="store-selector" onSubmit={ this.goToShop.bind(this) }>
        <h2>Please Enter a Shop</h2>
        <input type="text" required placeholder="Shop Name" defaultValue={ getFunName() } ref={ (input) => { this.shopInput = input }}/>
        <button type="submit">Visit Shop -></button>
      </form>
    );
  }
}

ShopPicker.contextTypes = {
  router: PropTypes.object
}

export default connect()(ShopPicker);
