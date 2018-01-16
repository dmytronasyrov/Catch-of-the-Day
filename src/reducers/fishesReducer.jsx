function fishesReducer (state = {}, action) {
  switch (action.type) {
    case 'FISHES_ADD': return action.fishes;

    case 'FISH_ADD':
      const timestamp = Date.now();
      const stateAdd = { ...state };
      stateAdd[`fish-${timestamp}`] = action.fish;

      return stateAdd;

    case 'FISH_UPDATE':
      const stateUpdate = { ...state };
      stateUpdate[action.key] = action.fish;

      return stateUpdate;

    case 'FISH_REMOVE':
      const stateRemove = { ...state };
      delete stateRemove[action.key];

      return stateRemove;

    default: return state;
  }
}

export default fishesReducer;
