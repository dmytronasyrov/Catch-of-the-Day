import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import fishes from './fishes';
import order from './order';

//----------------------------------------------------------------

const rootReducer = combineReducers({ fishes, order, router: routerReducer });

export default rootReducer;
