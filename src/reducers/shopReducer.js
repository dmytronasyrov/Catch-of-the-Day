function shopReducer (state = {}, action) {
  switch (action.type) {
    case 'SHOP_OPEN': return action.shopId;
    case 'SHOP_CLOSE': return nil;
    default: return state;
  }
}

export default shopReducer;
