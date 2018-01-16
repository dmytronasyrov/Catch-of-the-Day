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

    return base
      .post(`${getState().shop}/fishes`, { data: updatedFishes })
      .then(() => { return dispatch({ type: 'FISH_ADD', fish, key })})
      .catch(err => { console.error(err) });
  }
}

export function updateFish (key, fish) {
  return (dispatch, getState) => {
    const updatedFishes = { ...getState().fishes };
    updatedFishes[key] = fish;

    return base
      .post(`${getState().shop}/fishes`, { data: updatedFishes })
      .then(() => { return dispatch({ type: 'FISH_UPDATE', fish, key })})
      .catch(err => { console.error(err) });
  }
}

export function removeFish (key) {
  return (dispatch, getState) => {
    const updatedFishes = { ...getState().fishes };
    delete updatedFishes[key];

    return base
      .post(`${getState().shop}/fishes`, { data: updatedFishes })
      .then(() => { return dispatch({ type: 'FISH_REMOVE', key })})
      .catch(err => { console.error(err) });
  }
}
