class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name,
      t.boolean :is_seller

      t.timestamps
    end
  end
end
