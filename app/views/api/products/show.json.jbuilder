json.product do 
    @product.id do
        json.partial! 'product', product: product
    end
    # json.extract! @product, :shop_id, :title, :description, :product_type, :who, :what, :when, :price, :quantity, :category_id
end