class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id,:product_id
end
