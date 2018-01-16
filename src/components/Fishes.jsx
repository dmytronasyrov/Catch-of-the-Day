import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Fish from './Fish';

//--------------------------------------------------------------------------------------------------

const Fishes = (props) => {
  return (
    <div className="menu">
      <Header tagline="Fresh Seafood Market"/>

      <ul className="list-of-fishes">
        { Object.keys(props.fishes).map(key =>
          <Fish key={ key } index={ key } details={ props.fishes[key] } addToOrder={ props.addToOrder }/>
        )}
      </ul>
    </div>
  );
}

Fishes.propTypes = {
  fishes: PropTypes.object.isRequired,
  addToOrder: PropTypes.func.isRequired
}

export default Fishes;
