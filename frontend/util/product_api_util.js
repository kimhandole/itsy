export const fetchAllProducts = () => {
    return (
        $.ajax({
            method: 'GET',
            url: `api/products`
        })
    );
}

export const fetchProducts = (shop_id) => {
    return (
        $.ajax({
            method: 'GET',
            url: `api/shops/${shop_id}/products`
        })
    );
}

export const fetchProduct = (product_id) => (
    $.ajax({
        method: 'GET',
        url: `api/products/${product_id}`
    })
);

export const fetchProductsByCategory = (category_id) => (
    $.ajax({
        method: 'GET',
        url: `api/category/${category_id}`
    })
);

export const createProduct = (productForm) => {
    const shop_id = productForm.get('product[shop_id]');
    return $.ajax({
        method: 'POST',
        url: `/api/shops/${shop_id}/products`,
        data: productForm,
        contentType: false,
        processData: false
    });
}

export const updateProduct = productForm => {
    const product_id = productForm.get('product[id]');
    return $.ajax({
        method: 'PATCH',
        url: `/api/products/${product_id}`,
        data: productForm,
        contentType: false,
        processData: false
    })
}

export const deleteProduct = product_id => (
    $.ajax({
        method: 'DELETE',
        url: `api/products/${product_id}`
    })
);