function shopReducer (state = {}, action) {
  switch (action.type) {
    case 'SHOP_OPEN': return action.shopId;
    default: return state;
  }
}

export default shopReducer;
