# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

Product.destroy_all
User.destroy_all
Review.destroy_all
Brand.destroy_all

User.create(name: 'William Badger', email: 'badbadge@gmail.com', password_digest: 'password', is_seller: true);
User.create(name: 'James Berry', email: 'mallman@gmail.com', password_digest: 'password', is_seller: true);
User.create(name: 'Tenzing Shuprina ', email: 'TSA@gmail.com', password_digest: 'password', is_seller: true);
User.create(name: 'Roger Doger', email: 'RogerD@gmail.com', password_digest: 'password', is_seller: true);
User.create(name: 'Ghost', email: 'ghost@hotmail.com', password_digest: 'password', is_seller: true);


nike = Brand.create(name: 'Nike'),
adidas = Brand.create(name: 'Adidas'),
newBalance = Brand.create(name: 'New Balance'),
sketchers = Brand.create(name: 'Sketchers'),
vans = Brand.create(name: 'Vans'),
converse = Brand.create(name: 'Converse'),
reebok = Brand.create(name: 'Reebok'),
keds = Brand.create(name: 'Keds')

images = [
    'https://cdn.shopify.com/s/files/1/0107/9820/2938/products/brilliantmobile_800x800_crop_center.png?v=1628181638',
    'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1621881538090-b2b5ffaa996a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80',
    'https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80',
    'https://cdn.shopify.com/s/files/1/0068/6145/5421/products/Shoe1a_2_51d6b187-f75d-4eed-bcf4-3e04a1f11a80.png?v=1531949324',
    'https://cdn.luxatic.com/wp-content/uploads/2021/01/Most-Expensive-Yeezy-Shoes-768x512.jpg',
    'https://static.highsnobiety.com/thumbor/LZL2BHONHOLCQOTsBJIOfoYu40M=/1600x1067/static.highsnobiety.com/wp-content/uploads/2019/11/06165748/the-10-most-expensive-sneakers-ever-sold-12.jpg',
    'https://www.fashionbeans.com/wp-content/uploads/2018/07/luxtrainerbrands-top-cqp2.jpg',
    'https://cdn.luxe.digital/media/2020/02/17134507/gucci-off-white-and-navy-gg-screener-men-vintage-sneakers-luxe-digital.jpg',
    'https://shop.wilson.com/media/catalog/product/cache/38/image/9df78eab33525d08d6e5fb8d27136e95/d/d/dd41a53d4706fa86aca76bab7b84008f45cea7a2_WRS326900_1_2020_Pro_Staff_Classic_Men_WH_WH_Peacoat.jpg',
    'https://tenniscompanion.org/wp-content/uploads/2020/04/ten-best-tennis-shoes-2020-mens-and-womens-guide.png'
]

5.times do
    Product.create(
        name: Faker::Company.name, 
        price: rand(50..500), 
        image_url: images.sample,
        likes: rand(0.0..5.0),
        quantity: rand(0..1000),
        brand_id: Brand.all.sample.id,
        user_id: User.first.id
    );

end

200.times do
    Review.create(
        comment: Faker::Marketing.buzzwords, 
        user_id: User.all.sample.id, 
        product_id: Product.all.sample.id)
end

puts "Done seeding"