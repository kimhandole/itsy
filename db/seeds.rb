Shop.delete_all
User.delete_all

u1 = User.create!(
    email: 'demo@itsy.com',
    first_name: 'Demo User',
    password: '123123'
)