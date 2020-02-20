json.extract! product, :id, :title, :description, :price, :quantity, :product_type, :shop_id, :category_id, :who, :what, :when

if product.photo.attached?
    # json.imageUrls product.photo.map { |file| url_for(file) }
    json.imageUrl url_for(product.photo)

end    