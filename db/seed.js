const db = require('APP/db')
const seeds = require('./seeds');
const users = seeds.users,
      categories = seeds.categories,
      products = seeds.products,
      productsCategories = seeds.productsCategories,
      reviews = seeds.reviews;

const testUsers = [
  {name: 'admin', email: 'admin@bartendr.com', password: '1234', address: "5 Hanover Square, NY, NY 10004", isAdmin: true},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234', address: "1600 Pennsylvania Ave NW, Washington, DC 20500", isAdmin: false}
];

const seedUsers = () => db.Promise.map(testUsers.concat(users), user => db.model('users').create(user));
const seedCategories = () => db.Promise.map(categories, category => db.model('category').create(category));
const seedProducts = () => db.Promise.map(products, product => db.model('product').create(product));
const seedReviews = () => db.Promise.map(reviews, review => db.model('review').create(review));
const seedProductCategoryJoin = () => {
  console.log(productsCategories, typeof productsCategories, productsCategories.length)
  db.query(productsCategories);
}


db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedCategories)
  .then(categories => console.log(`Seeded ${categories.length} categories OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))
  .then(seedProductCategoryJoin)
  .then(seedReviews)
  .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
