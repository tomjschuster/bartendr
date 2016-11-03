const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedProducts = () => db.Promise.map([

  {name: "Grey Goose Vodka", abv: 40, size: "750 ml", price: 40, inventory: 5, photoUrl: "/media/martini-holder.jpg"},
  {name: "Barcardi Silver", abv: 40, size: "750 ml", price: 30, inventory: 5, photoUrl: "/media/martini-holder.jpg"},
  {name: "Tanqueray Gin", abv: 40, size: "750 ml", price: 30, inventory: 5, photoUrl: "/media/martini-holder.jpg"},
  {name: "Makers Mark", abv: 40, size: "750 ml", price: 40, inventory: 1, photoUrl: "/media/martini-holder.jpg"},
  {name: "Sprite", abv: 40, size: "750 ml", price: 3, inventory: 5, photoUrl: "/media/martini-holder.jpg"},
  {name: "Cranberry Juice", abv: 40, size: "750 ml", price: 2, inventory: 3, photoUrl: "/media/martini-holder.jpg"},
  {name: "Johnny Walker Black", abv: 40, size: "750 ml", price: 30, inventory: 5, photoUrl: "/media/martini-holder.jpg"},
  {name: "Tonic", abv: 40, size: "750 ml", price: 2, inventory: 2, photoUrl: "/media/martini-holder.jpg"},
  {name: "CocaCola", abv: 40, size: "750 ml", price: 3, inventory: 5, photoUrl: "/media/martini-holder.jpg"},
  {name: "Stoli Vodka", abv: 40, size: "750 ml", price: 40, inventory: 7, photoUrl: "/media/martini-holder.jpg"},
  {name: "Svedka Vodka", abv: 40, size: "750 ml", price: 30, inventory: 5, photoUrl: "/media/martini-holder.jpg"},
  {name: "Jim Beam", abv: 40, size: "750 ml", price: 40, inventory: 5, photoUrl: "/media/martini-holder.jpg"}

], product => db.model('product').create(product))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(seedProducts)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
