class ShoppingCartItem < ApplicationRecord
    validates :quantity, presence: true 

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product
end
