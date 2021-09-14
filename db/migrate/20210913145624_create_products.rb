class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :price
      t.string :image_url
      t.integer :likes
      t.integer :quantity
      t.integer :brand_id

      t.timestamps
    end
  end
end
