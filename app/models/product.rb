class Product < ApplicationRecord
    validates :title, :description, :price, :seller_id, :category_id, presence: true

    belongs_to :seller,
        foreign_key: :seller_id,
        class_name: :User

    belongs_to :category

    has_one_attached :photo
end
