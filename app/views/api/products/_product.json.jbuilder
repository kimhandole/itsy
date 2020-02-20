json.extract! product, :id, :title, :description, :price, :quantity, :product_type, :shop_id, :category_id, :who, :what, :when

# if product.images.attached?
#     json.imageUrls product.images.map { |file| url_for(file) }
# end    