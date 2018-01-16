function orderReducer (state = {}, action) {
  switch (action.type) {
    case 'ORDER_ADD':
      const newAddState = Object.assign({}, state)
      newAddState[action.key] = newAddState[action.key] + 1 || 1;

      return newAddState;

    case 'ORDER_REMOVE':
      const newRemoveState = Object.assign({}, state);
      delete newRemoveState[action.key];

      return newRemoveState;

    default: return state;
  }
}

export default orderReducer;
