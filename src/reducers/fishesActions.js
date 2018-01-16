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
    const name = `fish-${timestamp}`;
    const updatedFishes = { ...getState().fishes };
    updatedFishes[name] = fish

    return base
      .post(`${getState().shop}/fishes`, { data: updatedFishes })
      .then(() => { return dispatch({ type: 'FISH_ADD', fish, name })})
      .catch(err => { console.error(err) });
  }
}

export function updateFish (key, fish) {
  return { type: 'FISH_UPDATE', key, fish };
}

export function removeFish (key) {
  return { type: 'FISH_REMOVE', key };
}
