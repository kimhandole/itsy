class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title, null: false
      t.string :product_type, null: false
      t.string :who, null: false
      t.string :what, null: false
      t.string :when, null: false
      t.text :description, null: false
      t.decimal :price, null: false, precision: 15, scale: 2
      t.integer :quantity, null: false
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
    add_index :products, :who
    add_index :products, :what
    add_index :products, :when
    add_index :products, :product_type

  end
end
