json.product do
    json.extract! @product, :shop_id, :title, :description, :product_type, :who, :what, :when, :price, :quantity, :category_id
end