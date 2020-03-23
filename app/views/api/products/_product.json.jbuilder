json.extract! product, :id, :title, :description, :price, :quantity, :product_type, :shop_id, :category_id, :who, :what, :when

if product.photo.attached?
    # json.imageUrls product.photo.map { |file| url_for(file) }
    # json.photoUrl url_for(product.photo)
    json.photoUrls product.photo.map { |photo| url_for(photo) }
    # json.images product.photos.map{|img| url_for(img)}

end    