export const selectShops = state => Object.values(state.entities.shops);

export const selectShop = (shops, shopId) => {
    return shops[shopId];
}