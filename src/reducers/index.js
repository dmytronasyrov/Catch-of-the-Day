import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import shopReducer from './shopReducer';
import fishesReducer from './fishesReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  shop: shopReducer,
  fishes: fishesReducer,
  order: orderReducer,
  router: routerReducer
});
export default rootReducer;
