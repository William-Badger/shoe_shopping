class User < ApplicationRecord
    has_secure_password

    has_many :reviews
    has_many :products
    validates :email, presence: true
    validates :email, uniqueness: true
end
