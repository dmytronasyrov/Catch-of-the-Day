import base from '../setup/base';
import fishesSamples from '../data/fishes';

export function loadSamples () {
  return (dispatch, getState) => {
    const fishes = { ...getState().fishes, ...fishesSamples }

    return base
      .post(`${getState().shop}/fishes`, { data: fishes })
      .then(() => { return dispatch({ type: 'FISHES_ADD', fishes })})
      .catch(err => { console.error(err) });
  }
}

export function addFish (fish) {
  return (dispatch, getState) => {
    const timestamp = Date.now();
    const key = `fish-${timestamp}`;
    const updatedFishes = { ...getState().fishes };
    updatedFishes[key] = fish

    dispatch({ type: 'FISH_ADD', fish, key })
    
    return base.post(`${getState().shop}/fishes`, { data: updatedFishes })
  }
}

export function updateFish (key, fish) {
  return (dispatch, getState) => {
    const updatedFishes = { ...getState().fishes };
    updatedFishes[key] = fish;

    dispatch({ type: 'FISH_UPDATE', fish, key });

    return base.post(`${getState().shop}/fishes`, { data: updatedFishes });
  }
}

export function removeFish (key) {
  return (dispatch, getState) => {
    const updatedFishes = { ...getState().fishes };
    delete updatedFishes[key];

    dispatch({ type: 'FISH_REMOVE', key })

    return base.post(`${getState().shop}/fishes`, { data: updatedFishes })
  }
}
