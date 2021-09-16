class AddUserIdToProducts < ActiveRecord::Migration[6.1]
  def change
    change_table :products do |t|
      t.integer :user_id
    end
  end
end
