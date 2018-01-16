export const openShop = (shopId) => {
  return { type: 'SHOP_OPEN', shopId };
}

export const closeShop = () => {
  return { type: 'SHOP_CLOSE' }
}
