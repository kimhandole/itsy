Shop.delete_all
User.delete_all


u1 = User.create!(
    email: 'demo@itsy.com',
    first_name: 'Demo User',
    password: '123123'
)


s1 = Shop.create!(
    title: 'First Shop',
    owner_id: u1.id
)

s2 = Shop.create!(
    title: 'Second Shop',
    owner_id: u1.id
)

s1 = Shop.create!(
    title: 'Beer Shop',
    owner_id: u1.id
)

s2 = Shop.create!(
    title: 'Weed Shop',
    owner_id: u1.id
)