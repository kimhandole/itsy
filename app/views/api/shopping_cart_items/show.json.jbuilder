json.extract! @shopping_cart_item, :id, :user_id, :product_id, :quantity 
json.price @shopping_cart_item.product.price
# json.images @shopping_cart_item.product.images.map{|img| url_for(img)}
# json.photoUrl url_for(product.photo)
if @shopping_cart_item.product.photo.attached?
    json.photoUrls @shopping_cart_item.product.photo.map { |photo| url_for(photo) }

end    