class Product < ApplicationRecord
    has_many :reviews
    belongs_to :user 
    belongs_to :brand
    validates :name, presence: true
end
