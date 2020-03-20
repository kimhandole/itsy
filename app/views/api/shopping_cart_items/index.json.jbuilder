@shopping_cart_items.each do |item|
    json.set! item.id do 
        json.extract! item, :id, :user_id, :product_id, :quantity
        json.extract! item.product, :title, :price
        if item.product.photo.attached?
        # json.imageUrls product.photo.map { |file| url_for(file) }
            json.photoUrl url_for(item.product.photo)
        end    
    end 
end 