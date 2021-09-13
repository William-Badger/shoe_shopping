# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.destroy_all
User.destroy_all
Review.destroy_all
Brand.destroy_all

User.create(name: 'William Badger', email: 'badbadge@gmail.com', password_digest: '', is_seller: true)

Product.create(name: 'Product', price: 1, image_url: '', likes: 0, brand_id: 1)


nike = Brand.create(name: 'Nike')
adidas = Brand.create(name: 'Adidas')
new_balance = Brand.create(name: 'New Balance')
sketchers = Brand.create(name: 'Sketchers')
vans = Brand.create(name: 'Vans')
converse = Brand.create(name: 'Converse')
reebok = Brand.create(name: 'Reebok')
keds = Brand.create(name: 'Keds')
