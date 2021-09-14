# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

Product.destroy_all
User.destroy_all
Review.destroy_all
Brand.destroy_all

User.create(name: 'William Badger', email: 'badbadge@gmail.com', password_digest: 'password', is_seller: true);


nike = Brand.create(name: 'Nike')
adidas = Brand.create(name: 'Adidas')
new_balance = Brand.create(name: 'New Balance')
sketchers = Brand.create(name: 'Sketchers')
vans = Brand.create(name: 'Vans')
converse = Brand.create(name: 'Converse')
reebok = Brand.create(name: 'Reebok')
keds = Brand.create(name: 'Keds')

50.times do
    Product.create(name: Faker::Company.name, price: rand(50..500), image_url: '', likes: rand(0..50), quantity: rand(0..5000), brand_id: Brand.all.sample.id);
end

5.times do
    Review.create(comment: Faker::Marketing.buzzwords, user_id: User.all.sample.id, product_id: Product.all.sample.id)
end

puts "Done seeding"