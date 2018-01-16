export function addToOrder (key) {
  return { type: 'ORDER_ADD', key }
}

export function removeFromOrder (key) {
  return { type: 'ORDER_REMOVE', key }
}
