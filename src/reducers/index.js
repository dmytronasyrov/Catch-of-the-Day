import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import fishesReducer from './fishesReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  fishes: fishesReducer,
  order: orderReducer,
  router: routerReducer
});
export default rootReducer;
