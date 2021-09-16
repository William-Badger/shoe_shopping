class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :image_url, :likes, :quantity, :user_id


end
