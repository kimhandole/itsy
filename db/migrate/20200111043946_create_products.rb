class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.decimal :price, null: false, precision: 15, scale: 2
      t.integer :shop_id, null: false
      t.integer :category_id, null: false
      t.integer :cart_id
      t.string :picture_url

      t.timestamps
    end

    add_index :products, :title
    add_index :products, :description
    add_index :products, :shop_id
    add_index :products, :cart_id
    add_index :products, :category_id
  end
end
