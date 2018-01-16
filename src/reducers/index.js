import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import shopReducer from './shopReducer';
import fishesReducer from './fishesReducer';
import orderReducer from './orderReducer';

const appReducer = combineReducers({
  shop: shopReducer,
  fishes: fishesReducer,
  order: orderReducer,
  router: routerReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'SIGN_OUT')
    state = undefined

  return appReducer(state, action)
}

export default rootReducer;
