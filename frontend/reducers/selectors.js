export const selectShops = state => Object.values(state.entities.shops);

export const selectShop = (shops, shopId) => {
    return shops[shopId];
}

export const selectCategoryProducts = (allProducts, categoryId) => {
    const selectedProducts = [];
    Object.keys(allProducts).forEach(id => {
        if (allProducts[id].categoryId == categoryId) {
            selectedProducts.push(allProducts[id]);
        }
    });

    return selectedProducts;
}