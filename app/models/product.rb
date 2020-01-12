class Product < ApplicationRecord
    validates :title, :description, :price, :shop_id, :category_id, presence: true

    belongs_to :shop,
        foreign_key: :shop_id,
        class_name: :Shop

    belongs_to :category

    has_one_attached :photo
end
