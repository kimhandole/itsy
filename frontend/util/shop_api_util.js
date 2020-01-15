export const fetchShops = (owner_id) => {
    console.log(owner_id, "ownerId")
    return (
        $.ajax({
            method: 'GET',
            url: `api/owner/${owner_id}/shops`
        })
    );
}

export const fetchShop = id => (
    $.ajax({
        method: 'GET',
        url: `api/shops/${id}`
    })
);

export const createShop = shopForm => (
    $.ajax({
        method: 'POST',
        url: 'api/shops',
        data: shopForm,
        contentType: false,
        processData: false
    })
);

export const updateShop = (formData) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/shops/${formData.get('shop[id]')}`,
        data: formData,
        contentType: false,
        processData: false
    })

};