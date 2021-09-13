class Review < ApplicationRecord
    belongs_to :user
    belongs_to :product

    validates :comment, presence: :true
    validates :comment, length: { maximum: 500 }
end
