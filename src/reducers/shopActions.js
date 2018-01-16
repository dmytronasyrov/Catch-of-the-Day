import base from '../setup/base';

export function firebaseSync () {
  return (dispatch, getState) => {
    base.fetch(`${getState().shop}/fishes`, { context: this, asArray: false })
      .then(fishes => { return dispatch({ type: 'FISHES_ADD', fishes: { ...getState().fishes, ...fishes }})})
      .catch(err => { console.error(err) });
  }
}

export const openShop = (shopId) => {
  return { type: 'SHOP_OPEN', shopId };
}
