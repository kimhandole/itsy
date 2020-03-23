class Product < ApplicationRecord
    validates :title, :description, :price, :shop_id, :category_id, :product_type, :who, :what, :when, :quantity, presence: true

    # validates :ensure_photo

    belongs_to :shop,
        foreign_key: :shop_id,
        class_name: :Shop

    belongs_to :category,
        optional: true

    has_many_attached :photo

    has_many :shopping_cart_items,
        foreign_key: :product_id,
        class_name: :ShoppingCartItem 

    # def ensure_photo
    #     unless self.photo.attached?
    #         errors[:photo] << "A photo must be attached"
    #     end
    # end
end
