class Product < ApplicationRecord
    validates :title, :description, :price, :shop_id, :category_id, :product_type, :who, :what, :when, :quantity, presence: true

    belongs_to :shop,
        foreign_key: :shop_id,
        class_name: :Shop

    belongs_to :category, 
        optional: true

    has_one_attached :photo
end
